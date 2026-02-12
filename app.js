// app.js — ER Quick Notes application logic

(function () {
    "use strict";

    // State
    let currentComplaint = null;
    const answers = {}; // id -> value

    // DOM refs
    const complaintGrid = document.getElementById("complaint-grid");
    const complaintSection = document.getElementById("complaint-section");
    const questionsSection = document.getElementById("questions-section");
    const noteSection = document.getElementById("note-section");
    const selectedComplaintLabel = document.getElementById("selected-complaint-label");
    const changeComplaintBtn = document.getElementById("change-complaint-btn");
    const contextInput = document.getElementById("context-input");
    const questionPanels = document.getElementById("question-panels");
    const generateNoteBtn = document.getElementById("generate-note-btn");
    const clearAllBtn = document.getElementById("clear-all-btn");
    const noteOutput = document.getElementById("note-output");
    const copyNoteBtn = document.getElementById("copy-note-btn");
    const editQuestionsBtn = document.getElementById("edit-questions-btn");

    // ---- Render complaint buttons ----
    function renderComplaintGrid() {
        complaintGrid.innerHTML = "";
        COMPLAINTS.forEach(function (c) {
            const btn = document.createElement("button");
            btn.className = "complaint-btn";
            btn.innerHTML = '<span class="emoji">' + c.emoji + "</span>" + c.name;
            btn.addEventListener("click", function () {
                selectComplaint(c);
            });
            complaintGrid.appendChild(btn);
        });
    }

    function selectComplaint(complaint) {
        currentComplaint = complaint;
        // Clear previous answers
        Object.keys(answers).forEach(function (k) { delete answers[k]; });
        contextInput.value = "";
        selectedComplaintLabel.textContent = complaint.emoji + " " + complaint.name;

        complaintSection.classList.add("hidden");
        noteSection.classList.add("hidden");
        questionsSection.classList.remove("hidden");

        renderPanels();
    }

    changeComplaintBtn.addEventListener("click", function () {
        questionsSection.classList.add("hidden");
        noteSection.classList.add("hidden");
        complaintSection.classList.remove("hidden");
    });

    // ---- Render question panels (accordion) ----
    function renderPanels() {
        questionPanels.innerHTML = "";
        currentComplaint.sections.forEach(function (section, idx) {
            const panel = document.createElement("div");
            panel.className = "panel" + (idx === 0 ? " open" : "");

            const header = document.createElement("div");
            header.className = "panel-header";
            header.innerHTML = "<span>" + section.title + "</span><span class='arrow'>&#9654;</span>";
            header.addEventListener("click", function () {
                panel.classList.toggle("open");
            });

            const body = document.createElement("div");
            body.className = "panel-body";

            section.questions.forEach(function (q) {
                renderQuestion(body, q, false);
            });

            panel.appendChild(header);
            panel.appendChild(body);
            questionPanels.appendChild(panel);
        });
    }

    function renderQuestion(container, q, isSub) {
        const row = document.createElement("div");
        row.className = "question-row" + (isSub ? " sub-question" : "");
        row.dataset.questionId = q.id;

        const label = document.createElement("span");
        label.className = "question-label";
        label.textContent = q.label;
        row.appendChild(label);

        if (q.type === "yesno") {
            row.appendChild(createToggle(q));
        } else if (q.type === "text") {
            row.appendChild(createTextInput(q));
        } else if (q.type === "select") {
            row.appendChild(createSelect(q));
        } else if (q.type === "chips") {
            row.appendChild(createChips(q));
        }

        container.appendChild(row);

        // Sub-questions container (hidden by default)
        if (q.sub && q.sub.length > 0) {
            const subContainer = document.createElement("div");
            subContainer.className = "sub-container hidden";
            subContainer.dataset.parentId = q.id;
            q.sub.forEach(function (sq) {
                renderQuestion(subContainer, sq, true);
            });
            container.appendChild(subContainer);
        }
    }

    // ---- Input builders ----

    function createToggle(q) {
        const group = document.createElement("div");
        group.className = "toggle-group";

        const yesBtn = document.createElement("button");
        yesBtn.textContent = "Yes";
        const noBtn = document.createElement("button");
        noBtn.textContent = "No";

        function update(val) {
            answers[q.id] = val;
            yesBtn.className = val === true ? "active-yes" : "";
            noBtn.className = val === false ? "active-no" : "";

            // Show/hide sub-questions
            var subContainer = group.parentElement.parentElement.querySelector(
                '[data-parent-id="' + q.id + '"]'
            );
            if (subContainer) {
                if (val === true) {
                    subContainer.classList.remove("hidden");
                } else {
                    subContainer.classList.add("hidden");
                    // Clear sub answers
                    if (q.sub) {
                        q.sub.forEach(function (sq) { delete answers[sq.id]; });
                    }
                }
            }
        }

        yesBtn.addEventListener("click", function () { update(answers[q.id] === true ? undefined : true); });
        noBtn.addEventListener("click", function () { update(answers[q.id] === false ? undefined : false); });

        group.appendChild(yesBtn);
        group.appendChild(noBtn);
        return group;
    }

    function createTextInput(q) {
        const input = document.createElement("input");
        input.type = "text";
        input.className = "inline-input";
        input.placeholder = q.placeholder || "";
        input.addEventListener("input", function () {
            answers[q.id] = input.value.trim() || undefined;
        });
        return input;
    }

    function createSelect(q) {
        const select = document.createElement("select");
        select.className = "inline-select";
        const def = document.createElement("option");
        def.value = "";
        def.textContent = "—";
        select.appendChild(def);
        q.options.forEach(function (o) {
            const opt = document.createElement("option");
            opt.value = o;
            opt.textContent = o;
            select.appendChild(opt);
        });
        select.addEventListener("change", function () {
            answers[q.id] = select.value || undefined;
        });
        return select;
    }

    function createChips(q) {
        const group = document.createElement("div");
        group.className = "chip-group";
        if (!answers[q.id]) answers[q.id] = [];
        q.options.forEach(function (o) {
            const chip = document.createElement("button");
            chip.className = "chip";
            chip.textContent = o;
            chip.addEventListener("click", function () {
                var arr = answers[q.id] || [];
                var idx = arr.indexOf(o);
                if (idx >= 0) {
                    arr.splice(idx, 1);
                    chip.classList.remove("active");
                } else {
                    arr.push(o);
                    chip.classList.add("active");
                }
                answers[q.id] = arr.length > 0 ? arr : undefined;
            });
            group.appendChild(chip);
        });
        return group;
    }

    // ---- Note generation ----

    generateNoteBtn.addEventListener("click", function () {
        var note = buildNote();
        noteOutput.textContent = note;
        noteSection.classList.remove("hidden");
        questionsSection.classList.add("hidden");
    });

    editQuestionsBtn.addEventListener("click", function () {
        noteSection.classList.add("hidden");
        questionsSection.classList.remove("hidden");
    });

    clearAllBtn.addEventListener("click", function () {
        Object.keys(answers).forEach(function (k) { delete answers[k]; });
        contextInput.value = "";
        renderPanels();
    });

    copyNoteBtn.addEventListener("click", function () {
        navigator.clipboard.writeText(noteOutput.textContent).then(function () {
            showToast("Copied to clipboard");
        });
    });

    function showToast(msg) {
        var toast = document.createElement("div");
        toast.className = "toast";
        toast.textContent = msg;
        document.body.appendChild(toast);
        setTimeout(function () { toast.remove(); }, 2100);
    }

    function buildNote() {
        var lines = [];

        // Header
        lines.push("CHIEF COMPLAINT: " + currentComplaint.name);
        if (contextInput.value.trim()) {
            lines.push("CONTEXT: " + contextInput.value.trim());
        }
        lines.push("");

        // HPI narrative
        lines.push("HPI:");
        var hpiParts = [];

        if (contextInput.value.trim()) {
            hpiParts.push(contextInput.value.trim());
        }
        hpiParts.push("presenting with " + currentComplaint.name.toLowerCase() + ".");

        // Collect positive and negative findings by section
        currentComplaint.sections.forEach(function (section) {
            var sectionPositives = [];
            var sectionNegatives = [];

            collectFindings(section.questions, sectionPositives, sectionNegatives);

            if (sectionPositives.length > 0 || sectionNegatives.length > 0) {
                lines.push("");
                lines.push(section.title + ":");

                if (sectionPositives.length > 0) {
                    lines.push("  (+) " + sectionPositives.join("; "));
                }
                if (sectionNegatives.length > 0) {
                    lines.push("  (-) " + sectionNegatives.join(", "));
                }
            }
        });

        lines.push("");
        lines.push("---");
        lines.push("Generated by ER Quick Notes");

        return lines.join("\n");
    }

    function collectFindings(questions, positives, negatives) {
        questions.forEach(function (q) {
            var val = answers[q.id];

            if (val === undefined || val === null) return; // unanswered — skip

            var noteLabel = q.noteLabel || q.label;

            if (q.type === "yesno") {
                if (val === true) {
                    var detail = noteLabel;
                    // Include sub-question details
                    if (q.sub) {
                        var subDetails = [];
                        q.sub.forEach(function (sq) {
                            var sv = answers[sq.id];
                            if (sv === undefined || sv === null) return;
                            if (sv === true) {
                                subDetails.push(sq.noteLabel || sq.label);
                            } else if (sv === false) {
                                // skip negatives in sub-level for brevity
                            } else if (Array.isArray(sv) && sv.length > 0) {
                                subDetails.push((sq.noteLabel || sq.label) + ": " + sv.join(", "));
                            } else if (typeof sv === "string" && sv) {
                                subDetails.push((sq.noteLabel || sq.label) + ": " + sv);
                            }
                        });
                        if (subDetails.length > 0) {
                            detail += " (" + subDetails.join("; ") + ")";
                        }
                    }
                    positives.push(detail);
                } else if (val === false) {
                    negatives.push("no " + noteLabel.toLowerCase());
                }
            } else if (q.type === "chips") {
                if (Array.isArray(val) && val.length > 0) {
                    positives.push(noteLabel + ": " + val.join(", "));
                }
            } else if (q.type === "text") {
                if (typeof val === "string" && val) {
                    positives.push(noteLabel + ": " + val);
                }
            } else if (q.type === "select") {
                if (val) {
                    positives.push(noteLabel + ": " + val);
                }
            }
        });
    }

    // ---- Init ----
    renderComplaintGrid();

})();
