// complaints.js — Clinical question data for 20 common ER chief complaints
// Each complaint has sections (panels). Each section has questions.
// Question types:
//   "yesno"       — Yes/No toggle. May have "sub" array shown only when "yes".
//   "text"        — Free-text input
//   "select"      — Dropdown
//   "chips"       — Multi-select chips
//
// noteLabel: how it appears in the generated note (if omitted, uses label)

const COMPLAINTS = [

// ============================================================
// 1. CHEST PAIN
// ============================================================
{
    id: "chest_pain",
    name: "Chest Pain",
    emoji: "🫀",
    sections: [
        {
            title: "Pain Characteristics",
            questions: [
                { id: "cp_location", label: "Location", type: "chips", options: ["Substernal","Left-sided","Right-sided","Diffuse","Epigastric"], noteLabel: "Location" },
                { id: "cp_quality", label: "Quality", type: "chips", options: ["Sharp","Pressure","Squeezing","Tearing","Burning","Pleuritic"], noteLabel: "Quality" },
                { id: "cp_severity", label: "Severity (1-10)", type: "select", options: ["1","2","3","4","5","6","7","8","9","10"] },
                { id: "cp_radiation", label: "Radiation", type: "chips", options: ["Left arm","Right arm","Jaw","Back","Neck","None"] },
                { id: "cp_onset", label: "Onset", type: "chips", options: ["Sudden","Gradual"] },
                { id: "cp_duration", label: "Duration", type: "text", placeholder: "e.g. 2 hours" },
                { id: "cp_exertional", label: "Exertional", type: "yesno" },
                { id: "cp_at_rest", label: "Present at rest", type: "yesno" },
                { id: "cp_positional", label: "Positional / pleuritic component", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "cp_dyspnea", label: "Shortness of breath", type: "yesno" },
                { id: "cp_diaphoresis", label: "Diaphoresis", type: "yesno" },
                { id: "cp_nausea", label: "Nausea / vomiting", type: "yesno" },
                { id: "cp_palpitations", label: "Palpitations", type: "yesno" },
                { id: "cp_syncope", label: "Syncope / presyncope", type: "yesno" },
                { id: "cp_cough", label: "Cough", type: "yesno" },
                { id: "cp_leg_swelling", label: "Leg swelling / pain", type: "yesno" },
            ]
        },
        {
            title: "Risk Factors",
            questions: [
                { id: "cp_htn", label: "Hypertension", type: "yesno" },
                { id: "cp_dm", label: "Diabetes", type: "yesno" },
                { id: "cp_smoker", label: "Smoker", type: "yesno" },
                { id: "cp_hyperlipidemia", label: "Hyperlipidemia", type: "yesno" },
                { id: "cp_fhx_cad", label: "Family history of CAD", type: "yesno" },
                { id: "cp_prior_cad", label: "Known CAD / prior MI / stents", type: "yesno" },
                { id: "cp_cocaine", label: "Cocaine / stimulant use", type: "yesno" },
                { id: "cp_dvt_risk", label: "DVT/PE risk factors (immobility, OCP, recent surgery, cancer)", type: "yesno" },
            ]
        },
        {
            title: "Pertinent Negatives",
            questions: [
                { id: "cp_no_trauma", label: "No recent trauma", type: "yesno" },
                { id: "cp_no_fever", label: "No fever", type: "yesno" },
                { id: "cp_no_abd_pain", label: "No abdominal pain", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 2. ABDOMINAL PAIN
// ============================================================
{
    id: "abdominal_pain",
    name: "Abdominal Pain",
    emoji: "🤢",
    sections: [
        {
            title: "Pain Characteristics",
            questions: [
                { id: "ab_location", label: "Location", type: "chips", options: ["RUQ","Epigastric","LUQ","Periumbilical","RLQ","LLQ","Suprapubic","Diffuse","Flank"] },
                { id: "ab_quality", label: "Quality", type: "chips", options: ["Crampy","Sharp","Dull","Burning","Colicky"] },
                { id: "ab_severity", label: "Severity (1-10)", type: "select", options: ["1","2","3","4","5","6","7","8","9","10"] },
                { id: "ab_onset", label: "Onset", type: "chips", options: ["Sudden","Gradual"] },
                { id: "ab_duration", label: "Duration", type: "text", placeholder: "e.g. 6 hours" },
                { id: "ab_constant", label: "Constant vs intermittent", type: "chips", options: ["Constant","Intermittent"] },
                { id: "ab_migration", label: "Pain migrated", type: "yesno", sub: [
                    { id: "ab_migration_desc", label: "From → To", type: "text", placeholder: "e.g. periumbilical → RLQ" }
                ]},
                { id: "ab_worse_food", label: "Worse with eating", type: "yesno" },
            ]
        },
        {
            title: "GI Symptoms",
            questions: [
                { id: "ab_nausea", label: "Nausea", type: "yesno" },
                { id: "ab_vomiting", label: "Vomiting", type: "yesno", sub: [
                    { id: "ab_vomit_content", label: "Content", type: "chips", options: ["Food","Bile","Blood","Coffee-ground"] },
                    { id: "ab_vomit_freq", label: "Frequency", type: "text", placeholder: "e.g. 3 episodes" },
                ]},
                { id: "ab_diarrhea", label: "Diarrhea", type: "yesno", sub: [
                    { id: "ab_diarrhea_blood", label: "Bloody", type: "yesno" },
                    { id: "ab_diarrhea_freq", label: "Frequency", type: "text", placeholder: "e.g. 5x/day" },
                ]},
                { id: "ab_constipation", label: "Constipation", type: "yesno", sub: [
                    { id: "ab_last_bm", label: "Last BM", type: "text", placeholder: "e.g. 3 days ago" },
                ]},
                { id: "ab_flatus", label: "Passing flatus", type: "yesno" },
                { id: "ab_melena", label: "Melena / dark stools", type: "yesno" },
                { id: "ab_appetite", label: "Decreased appetite", type: "yesno" },
            ]
        },
        {
            title: "Urinary Symptoms",
            questions: [
                { id: "ab_uri_sx", label: "Any urinary symptoms", type: "yesno", sub: [
                    { id: "ab_dysuria", label: "Dysuria", type: "yesno" },
                    { id: "ab_frequency", label: "Frequency", type: "yesno" },
                    { id: "ab_hematuria", label: "Hematuria", type: "yesno" },
                    { id: "ab_uri_urgency", label: "Urgency", type: "yesno" },
                ]},
            ]
        },
        {
            title: "GYN (if applicable)",
            questions: [
                { id: "ab_gyn_applicable", label: "Female patient — GYN review", type: "yesno", sub: [
                    { id: "ab_lmp", label: "LMP", type: "text", placeholder: "Date or 'regular'" },
                    { id: "ab_pregnant", label: "Possible pregnancy", type: "yesno" },
                    { id: "ab_vaginal_bleeding", label: "Vaginal bleeding", type: "yesno" },
                    { id: "ab_vaginal_discharge", label: "Vaginal discharge", type: "yesno" },
                ]},
            ]
        },
        {
            title: "Systemic / Red Flags",
            questions: [
                { id: "ab_fever", label: "Fever", type: "yesno" },
                { id: "ab_weight_loss", label: "Unintentional weight loss", type: "yesno" },
                { id: "ab_prior_surgery", label: "Prior abdominal surgery", type: "yesno", sub: [
                    { id: "ab_surgery_desc", label: "Which surgery", type: "text", placeholder: "" }
                ]},
                { id: "ab_hx_similar", label: "History of similar episodes", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 3. SHORTNESS OF BREATH
// ============================================================
{
    id: "sob",
    name: "Shortness of Breath",
    emoji: "🫁",
    sections: [
        {
            title: "Dyspnea Characteristics",
            questions: [
                { id: "sob_onset", label: "Onset", type: "chips", options: ["Sudden","Gradual","Worsening over days"] },
                { id: "sob_duration", label: "Duration", type: "text", placeholder: "e.g. 3 days" },
                { id: "sob_at_rest", label: "At rest", type: "yesno" },
                { id: "sob_exertional", label: "On exertion", type: "yesno" },
                { id: "sob_orthopnea", label: "Orthopnea", type: "yesno" },
                { id: "sob_pnd", label: "PND (paroxysmal nocturnal dyspnea)", type: "yesno" },
                { id: "sob_severity", label: "Severity", type: "chips", options: ["Mild","Moderate","Severe"] },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "sob_cough", label: "Cough", type: "yesno", sub: [
                    { id: "sob_cough_prod", label: "Productive", type: "yesno" },
                    { id: "sob_sputum", label: "Sputum color", type: "chips", options: ["Clear","Yellow","Green","Blood-tinged","Pink/frothy"] },
                ]},
                { id: "sob_chest_pain", label: "Chest pain", type: "yesno" },
                { id: "sob_wheeze", label: "Wheezing", type: "yesno" },
                { id: "sob_fever", label: "Fever", type: "yesno" },
                { id: "sob_leg_swelling", label: "Leg swelling", type: "yesno" },
                { id: "sob_leg_pain", label: "Calf / leg pain", type: "yesno" },
                { id: "sob_palpitations", label: "Palpitations", type: "yesno" },
            ]
        },
        {
            title: "History",
            questions: [
                { id: "sob_asthma", label: "Known asthma / COPD", type: "yesno" },
                { id: "sob_chf", label: "Known CHF", type: "yesno" },
                { id: "sob_recent_immobil", label: "Recent immobilization / travel / surgery", type: "yesno" },
                { id: "sob_cancer", label: "Known malignancy", type: "yesno" },
                { id: "sob_smoking", label: "Smoking history", type: "yesno" },
                { id: "sob_ocp", label: "OCP / hormone use", type: "yesno" },
                { id: "sob_prior_dvt", label: "Prior DVT / PE", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 4. HEADACHE
// ============================================================
{
    id: "headache",
    name: "Headache",
    emoji: "🧠",
    sections: [
        {
            title: "Headache Characteristics",
            questions: [
                { id: "ha_onset", label: "Onset", type: "chips", options: ["Thunderclap/sudden","Gradual","Worsening"] },
                { id: "ha_location", label: "Location", type: "chips", options: ["Frontal","Temporal","Occipital","Unilateral","Bilateral","Global"] },
                { id: "ha_quality", label: "Quality", type: "chips", options: ["Throbbing","Pressure","Sharp","Band-like"] },
                { id: "ha_severity", label: "Severity (1-10)", type: "select", options: ["1","2","3","4","5","6","7","8","9","10"] },
                { id: "ha_duration", label: "Duration", type: "text", placeholder: "e.g. 2 days" },
                { id: "ha_worst_ever", label: "Worst headache of life", type: "yesno" },
            ]
        },
        {
            title: "Red Flag Symptoms",
            questions: [
                { id: "ha_fever", label: "Fever", type: "yesno" },
                { id: "ha_neck_stiff", label: "Neck stiffness", type: "yesno" },
                { id: "ha_neuro_deficit", label: "Focal neurological deficit", type: "yesno", sub: [
                    { id: "ha_neuro_desc", label: "Describe", type: "text", placeholder: "e.g. left arm weakness" }
                ]},
                { id: "ha_vision_change", label: "Vision changes", type: "yesno", sub: [
                    { id: "ha_vision_desc", label: "Describe", type: "text", placeholder: "e.g. blurry, diplopia, loss" }
                ]},
                { id: "ha_seizure", label: "Seizure", type: "yesno" },
                { id: "ha_confusion", label: "Confusion / AMS", type: "yesno" },
                { id: "ha_syncope", label: "Syncope", type: "yesno" },
                { id: "ha_trauma", label: "Recent head trauma", type: "yesno" },
                { id: "ha_wakes_sleep", label: "Wakes from sleep", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "ha_nausea", label: "Nausea / vomiting", type: "yesno" },
                { id: "ha_photophobia", label: "Photophobia", type: "yesno" },
                { id: "ha_phonophobia", label: "Phonophobia", type: "yesno" },
                { id: "ha_aura", label: "Aura", type: "yesno" },
            ]
        },
        {
            title: "History",
            questions: [
                { id: "ha_hx_migraine", label: "Known migraines", type: "yesno" },
                { id: "ha_similar_prior", label: "Similar to prior headaches", type: "yesno" },
                { id: "ha_anticoag", label: "On anticoagulation", type: "yesno" },
                { id: "ha_immunocomp", label: "Immunocompromised", type: "yesno" },
                { id: "ha_age_over50", label: "Age > 50 with new headache", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 5. BACK PAIN
// ============================================================
{
    id: "back_pain",
    name: "Back Pain",
    emoji: "🦴",
    sections: [
        {
            title: "Pain Characteristics",
            questions: [
                { id: "bp_location", label: "Location", type: "chips", options: ["Cervical","Thoracic","Lumbar","Sacral","Flank"] },
                { id: "bp_quality", label: "Quality", type: "chips", options: ["Sharp","Dull","Aching","Radiating","Spasm"] },
                { id: "bp_severity", label: "Severity (1-10)", type: "select", options: ["1","2","3","4","5","6","7","8","9","10"] },
                { id: "bp_onset", label: "Onset", type: "chips", options: ["Sudden","Gradual","After lifting/twisting"] },
                { id: "bp_duration", label: "Duration", type: "text", placeholder: "" },
                { id: "bp_radiation_legs", label: "Radiation to legs", type: "yesno", sub: [
                    { id: "bp_radiculopathy_side", label: "Which side", type: "chips", options: ["Left","Right","Bilateral"] },
                ]},
            ]
        },
        {
            title: "Red Flags (Cauda Equina / Serious)",
            questions: [
                { id: "bp_saddle_anesth", label: "Saddle anesthesia", type: "yesno" },
                { id: "bp_urinary_retention", label: "Urinary retention / incontinence", type: "yesno" },
                { id: "bp_bowel_incont", label: "Bowel incontinence", type: "yesno" },
                { id: "bp_weakness", label: "Leg weakness", type: "yesno", sub: [
                    { id: "bp_weakness_desc", label: "Describe", type: "text", placeholder: "e.g. foot drop, bilateral" }
                ]},
                { id: "bp_fever", label: "Fever", type: "yesno" },
                { id: "bp_weight_loss", label: "Unintentional weight loss", type: "yesno" },
                { id: "bp_cancer_hx", label: "History of cancer", type: "yesno" },
                { id: "bp_ivdu", label: "IV drug use", type: "yesno" },
                { id: "bp_trauma", label: "Trauma", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "bp_numbness", label: "Numbness / tingling", type: "yesno" },
                { id: "bp_uri_sx", label: "Urinary symptoms", type: "yesno" },
                { id: "bp_abd_pain", label: "Abdominal pain", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 6. FEVER
// ============================================================
{
    id: "fever",
    name: "Fever",
    emoji: "🌡️",
    sections: [
        {
            title: "Fever Details",
            questions: [
                { id: "fv_temp", label: "Max temp / measured?", type: "text", placeholder: "e.g. 39.2°C at home" },
                { id: "fv_duration", label: "Duration", type: "text", placeholder: "e.g. 2 days" },
                { id: "fv_pattern", label: "Pattern", type: "chips", options: ["Constant","Intermittent","Worsening"] },
                { id: "fv_chills", label: "Chills / rigors", type: "yesno" },
                { id: "fv_night_sweats", label: "Night sweats", type: "yesno" },
            ]
        },
        {
            title: "Source Review",
            questions: [
                { id: "fv_respiratory", label: "Respiratory symptoms (cough, SOB, sore throat)", type: "yesno", sub: [
                    { id: "fv_resp_detail", label: "Detail", type: "text", placeholder: "e.g. productive cough x3d" }
                ]},
                { id: "fv_uri_sx", label: "Urinary symptoms", type: "yesno", sub: [
                    { id: "fv_uri_detail", label: "Detail", type: "text", placeholder: "e.g. dysuria, frequency" }
                ]},
                { id: "fv_gi_sx", label: "GI symptoms (N/V/D, abd pain)", type: "yesno", sub: [
                    { id: "fv_gi_detail", label: "Detail", type: "text", placeholder: "" }
                ]},
                { id: "fv_skin_sx", label: "Skin/wound infection signs", type: "yesno", sub: [
                    { id: "fv_skin_detail", label: "Detail", type: "text", placeholder: "e.g. redness left leg" }
                ]},
                { id: "fv_headache", label: "Headache", type: "yesno" },
                { id: "fv_neck_stiff", label: "Neck stiffness", type: "yesno" },
                { id: "fv_rash", label: "Rash", type: "yesno" },
                { id: "fv_joint_pain", label: "Joint pain / swelling", type: "yesno" },
            ]
        },
        {
            title: "History / Risk",
            questions: [
                { id: "fv_immunocomp", label: "Immunocompromised", type: "yesno" },
                { id: "fv_recent_travel", label: "Recent travel", type: "yesno" },
                { id: "fv_recent_abx", label: "Recent antibiotics", type: "yesno" },
                { id: "fv_recent_surgery", label: "Recent surgery / procedure", type: "yesno" },
                { id: "fv_indwelling_device", label: "Indwelling device (catheter, line, prosthetic)", type: "yesno" },
                { id: "fv_sick_contacts", label: "Sick contacts", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 7. COUGH
// ============================================================
{
    id: "cough",
    name: "Cough",
    emoji: "😷",
    sections: [
        {
            title: "Cough Characteristics",
            questions: [
                { id: "co_duration", label: "Duration", type: "text", placeholder: "e.g. 5 days" },
                { id: "co_productive", label: "Productive", type: "yesno", sub: [
                    { id: "co_sputum_color", label: "Sputum color", type: "chips", options: ["Clear","Yellow","Green","Blood-tinged","Rust-colored"] },
                ]},
                { id: "co_hemoptysis", label: "Hemoptysis", type: "yesno" },
                { id: "co_timing", label: "Timing", type: "chips", options: ["Constant","Nocturnal","Positional","Post-nasal drip"] },
                { id: "co_worsening", label: "Worsening", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "co_fever", label: "Fever", type: "yesno" },
                { id: "co_sob", label: "Shortness of breath", type: "yesno" },
                { id: "co_chest_pain", label: "Chest pain", type: "yesno" },
                { id: "co_wheeze", label: "Wheezing", type: "yesno" },
                { id: "co_sore_throat", label: "Sore throat", type: "yesno" },
                { id: "co_nasal_congest", label: "Nasal congestion / rhinorrhea", type: "yesno" },
                { id: "co_myalgias", label: "Myalgias / body aches", type: "yesno" },
                { id: "co_weight_loss", label: "Unintentional weight loss", type: "yesno" },
            ]
        },
        {
            title: "History",
            questions: [
                { id: "co_smoking", label: "Smoking history", type: "yesno" },
                { id: "co_asthma", label: "Known asthma / COPD", type: "yesno" },
                { id: "co_sick_contacts", label: "Sick contacts", type: "yesno" },
                { id: "co_tb_risk", label: "TB risk (travel, exposure, homeless)", type: "yesno" },
                { id: "co_immunocomp", label: "Immunocompromised", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 8. DIZZINESS / VERTIGO
// ============================================================
{
    id: "dizziness",
    name: "Dizziness / Vertigo",
    emoji: "😵",
    sections: [
        {
            title: "Dizziness Characteristics",
            questions: [
                { id: "dz_type", label: "Type", type: "chips", options: ["Room spinning (vertigo)","Lightheaded","Unsteady/off-balance","Near-syncope"] },
                { id: "dz_onset", label: "Onset", type: "chips", options: ["Sudden","Gradual"] },
                { id: "dz_duration", label: "Duration per episode", type: "text", placeholder: "e.g. seconds, minutes, hours" },
                { id: "dz_constant", label: "Constant vs episodic", type: "chips", options: ["Constant","Episodic"] },
                { id: "dz_positional", label: "Positional (worse with head turning)", type: "yesno" },
                { id: "dz_first_episode", label: "First episode", type: "yesno" },
            ]
        },
        {
            title: "Red Flag / Central Symptoms",
            questions: [
                { id: "dz_neuro_deficit", label: "Focal neurological deficit", type: "yesno", sub: [
                    { id: "dz_neuro_desc", label: "Describe", type: "text", placeholder: "weakness, numbness, speech" }
                ]},
                { id: "dz_diplopia", label: "Diplopia", type: "yesno" },
                { id: "dz_dysarthria", label: "Dysarthria / speech difficulty", type: "yesno" },
                { id: "dz_dysphagia", label: "Dysphagia", type: "yesno" },
                { id: "dz_headache", label: "Severe headache", type: "yesno" },
                { id: "dz_ataxia", label: "Gait ataxia / unable to walk", type: "yesno" },
                { id: "dz_hearing_loss", label: "Hearing loss", type: "yesno" },
                { id: "dz_tinnitus", label: "Tinnitus", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "dz_nausea", label: "Nausea / vomiting", type: "yesno" },
                { id: "dz_chest_pain", label: "Chest pain", type: "yesno" },
                { id: "dz_palpitations", label: "Palpitations", type: "yesno" },
            ]
        },
        {
            title: "History",
            questions: [
                { id: "dz_hx_vertigo", label: "Prior episodes of vertigo", type: "yesno" },
                { id: "dz_vascular_rf", label: "Vascular risk factors (HTN, DM, smoking)", type: "yesno" },
                { id: "dz_anticoag", label: "On anticoagulation", type: "yesno" },
                { id: "dz_recent_uri", label: "Recent URI / ear infection", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 9. EXTREMITY PAIN / INJURY
// ============================================================
{
    id: "extremity_pain",
    name: "Extremity Pain / Injury",
    emoji: "🦵",
    sections: [
        {
            title: "Injury / Pain Details",
            questions: [
                { id: "ex_location", label: "Location", type: "text", placeholder: "e.g. right ankle" },
                { id: "ex_mechanism", label: "Mechanism", type: "chips", options: ["Fall","Twist/sprain","Direct blow","Overuse","No trauma"] },
                { id: "ex_severity", label: "Severity (1-10)", type: "select", options: ["1","2","3","4","5","6","7","8","9","10"] },
                { id: "ex_weight_bear", label: "Able to bear weight", type: "yesno" },
                { id: "ex_deformity", label: "Obvious deformity", type: "yesno" },
                { id: "ex_swelling", label: "Swelling", type: "yesno" },
            ]
        },
        {
            title: "Neurovascular",
            questions: [
                { id: "ex_sensation", label: "Sensation intact distally", type: "yesno" },
                { id: "ex_movement", label: "Movement intact distally", type: "yesno" },
                { id: "ex_pulses", label: "Pulses intact distally", type: "yesno" },
                { id: "ex_open_wound", label: "Open wound over injury", type: "yesno" },
            ]
        },
        {
            title: "Non-traumatic Considerations",
            questions: [
                { id: "ex_atraumatic", label: "Non-traumatic pain", type: "yesno", sub: [
                    { id: "ex_redness_warmth", label: "Redness / warmth of joint", type: "yesno" },
                    { id: "ex_unilateral_leg_swelling", label: "Unilateral leg swelling (DVT concern)", type: "yesno" },
                    { id: "ex_fever", label: "Fever", type: "yesno" },
                    { id: "ex_gout_hx", label: "History of gout", type: "yesno" },
                ]},
            ]
        }
    ]
},

// ============================================================
// 10. LACERATION / WOUND
// ============================================================
{
    id: "laceration",
    name: "Laceration / Wound",
    emoji: "🩹",
    sections: [
        {
            title: "Wound Details",
            questions: [
                { id: "lac_location", label: "Location", type: "text", placeholder: "e.g. left forearm" },
                { id: "lac_mechanism", label: "Mechanism", type: "chips", options: ["Knife/sharp","Glass","Fall","Bite","Crush","Other"] },
                { id: "lac_length", label: "Length (cm)", type: "text", placeholder: "e.g. 4 cm" },
                { id: "lac_depth", label: "Depth", type: "chips", options: ["Superficial","Subcutaneous","Deep/muscle","To bone"] },
                { id: "lac_contamination", label: "Contaminated / dirty", type: "yesno" },
                { id: "lac_time_injury", label: "Time since injury", type: "text", placeholder: "e.g. 2 hours" },
            ]
        },
        {
            title: "Neurovascular / Function",
            questions: [
                { id: "lac_sensation", label: "Sensation intact distal to wound", type: "yesno" },
                { id: "lac_motor", label: "Motor function intact", type: "yesno" },
                { id: "lac_bleeding_controlled", label: "Bleeding controlled", type: "yesno" },
                { id: "lac_tendon_visible", label: "Tendon / bone visible", type: "yesno" },
                { id: "lac_foreign_body", label: "Possible foreign body", type: "yesno" },
            ]
        },
        {
            title: "Tetanus / Infection Risk",
            questions: [
                { id: "lac_tetanus", label: "Tetanus up to date", type: "yesno" },
                { id: "lac_immunocomp", label: "Immunocompromised / diabetic", type: "yesno" },
                { id: "lac_bite", label: "Bite wound", type: "yesno", sub: [
                    { id: "lac_bite_type", label: "Animal type", type: "text", placeholder: "e.g. dog, cat, human" }
                ]},
            ]
        }
    ]
},

// ============================================================
// 11. NAUSEA / VOMITING
// ============================================================
{
    id: "nausea_vomiting",
    name: "Nausea / Vomiting",
    emoji: "🤮",
    sections: [
        {
            title: "Vomiting Details",
            questions: [
                { id: "nv_onset", label: "Onset", type: "text", placeholder: "e.g. 12 hours ago" },
                { id: "nv_frequency", label: "Frequency", type: "text", placeholder: "e.g. 6 episodes" },
                { id: "nv_content", label: "Content", type: "chips", options: ["Food","Bile","Blood","Coffee-ground","Feculent"] },
                { id: "nv_tolerating_po", label: "Tolerating PO", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "nv_abd_pain", label: "Abdominal pain", type: "yesno", sub: [
                    { id: "nv_abd_location", label: "Location", type: "chips", options: ["Epigastric","RUQ","Diffuse","RLQ","LLQ","Suprapubic"] },
                ]},
                { id: "nv_diarrhea", label: "Diarrhea", type: "yesno" },
                { id: "nv_fever", label: "Fever", type: "yesno" },
                { id: "nv_headache", label: "Headache", type: "yesno" },
                { id: "nv_dizziness", label: "Dizziness", type: "yesno" },
                { id: "nv_chest_pain", label: "Chest pain", type: "yesno" },
            ]
        },
        {
            title: "Context",
            questions: [
                { id: "nv_food_related", label: "Related to food ingestion", type: "yesno" },
                { id: "nv_sick_contacts", label: "Sick contacts", type: "yesno" },
                { id: "nv_pregnancy_possible", label: "Pregnancy possible", type: "yesno" },
                { id: "nv_medications", label: "New medications", type: "yesno" },
                { id: "nv_dm", label: "Diabetic (DKA concern)", type: "yesno" },
                { id: "nv_prior_surgery", label: "Prior abdominal surgery", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 12. ALLERGIC REACTION
// ============================================================
{
    id: "allergic_reaction",
    name: "Allergic Reaction",
    emoji: "⚠️",
    sections: [
        {
            title: "Reaction Details",
            questions: [
                { id: "ar_trigger", label: "Suspected trigger", type: "text", placeholder: "e.g. peanuts, medication, bee sting" },
                { id: "ar_time_exposure", label: "Time since exposure", type: "text", placeholder: "e.g. 30 minutes" },
                { id: "ar_prior_similar", label: "Prior similar reaction", type: "yesno" },
                { id: "ar_epi_given", label: "Epinephrine given pre-arrival", type: "yesno" },
            ]
        },
        {
            title: "Symptoms — Anaphylaxis Criteria",
            questions: [
                { id: "ar_skin", label: "Skin: hives, flushing, angioedema", type: "yesno", sub: [
                    { id: "ar_skin_desc", label: "Detail", type: "chips", options: ["Urticaria","Angioedema (lip/tongue)","Flushing","Pruritus"] },
                ]},
                { id: "ar_respiratory", label: "Respiratory: SOB, wheeze, stridor, throat tightness", type: "yesno", sub: [
                    { id: "ar_resp_desc", label: "Detail", type: "chips", options: ["Wheeze","Stridor","Throat tightness","Dyspnea","Hoarse voice"] },
                ]},
                { id: "ar_gi", label: "GI: nausea, vomiting, diarrhea, cramping", type: "yesno" },
                { id: "ar_cardiovascular", label: "Cardiovascular: hypotension, syncope, dizziness", type: "yesno" },
            ]
        },
        {
            title: "History",
            questions: [
                { id: "ar_known_allergies", label: "Known allergies", type: "text", placeholder: "" },
                { id: "ar_has_epipen", label: "Carries EpiPen", type: "yesno" },
                { id: "ar_asthma", label: "Asthma", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 13. SYNCOPE
// ============================================================
{
    id: "syncope",
    name: "Syncope",
    emoji: "💫",
    sections: [
        {
            title: "Event Details",
            questions: [
                { id: "sy_true_loc", label: "True loss of consciousness", type: "yesno" },
                { id: "sy_duration_loc", label: "Duration of LOC", type: "text", placeholder: "e.g. <1 minute" },
                { id: "sy_position", label: "Position at onset", type: "chips", options: ["Standing","Sitting","Supine","Exertional"] },
                { id: "sy_prodrome", label: "Prodrome (lightheaded, warm, tunnel vision)", type: "yesno" },
                { id: "sy_witnessed", label: "Witnessed event", type: "yesno" },
            ]
        },
        {
            title: "Concerning Features",
            questions: [
                { id: "sy_exertional", label: "During exertion", type: "yesno" },
                { id: "sy_chest_pain", label: "Chest pain before/after", type: "yesno" },
                { id: "sy_palpitations", label: "Palpitations before event", type: "yesno" },
                { id: "sy_seizure_activity", label: "Seizure-like activity (shaking, tongue bite, incontinence)", type: "yesno" },
                { id: "sy_head_injury", label: "Head injury from fall", type: "yesno" },
                { id: "sy_prolonged_confusion", label: "Prolonged confusion post-event", type: "yesno" },
                { id: "sy_neuro_deficit", label: "Focal neurological deficit", type: "yesno" },
            ]
        },
        {
            title: "History / Risk",
            questions: [
                { id: "sy_cardiac_hx", label: "Known cardiac disease", type: "yesno" },
                { id: "sy_fhx_sudden_death", label: "Family hx sudden cardiac death", type: "yesno" },
                { id: "sy_prior_syncope", label: "Prior syncope episodes", type: "yesno" },
                { id: "sy_medications", label: "Medications (antihypertensives, antiarrhythmics, QT-prolonging)", type: "yesno" },
                { id: "sy_dehydration", label: "Dehydrated / poor PO", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 14. SORE THROAT
// ============================================================
{
    id: "sore_throat",
    name: "Sore Throat",
    emoji: "🗣️",
    sections: [
        {
            title: "Throat Symptoms",
            questions: [
                { id: "st_duration", label: "Duration", type: "text", placeholder: "e.g. 3 days" },
                { id: "st_severity", label: "Severity (1-10)", type: "select", options: ["1","2","3","4","5","6","7","8","9","10"] },
                { id: "st_dysphagia", label: "Difficulty swallowing", type: "yesno" },
                { id: "st_drooling", label: "Drooling / unable to swallow secretions", type: "yesno" },
                { id: "st_voice_change", label: "Voice change / hot potato voice", type: "yesno" },
                { id: "st_trismus", label: "Trismus (difficulty opening mouth)", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "st_fever", label: "Fever", type: "yesno" },
                { id: "st_lymph", label: "Swollen lymph nodes", type: "yesno" },
                { id: "st_cough", label: "Cough", type: "yesno" },
                { id: "st_rhinorrhea", label: "Rhinorrhea / congestion", type: "yesno" },
                { id: "st_rash", label: "Rash", type: "yesno" },
                { id: "st_neck_swelling", label: "Neck swelling", type: "yesno" },
                { id: "st_sob", label: "Shortness of breath / stridor", type: "yesno" },
            ]
        },
        {
            title: "Centor Criteria (Strep)",
            questions: [
                { id: "st_tonsillar_exudate", label: "Tonsillar exudate", type: "yesno" },
                { id: "st_tender_ant_cervical", label: "Tender anterior cervical lymphadenopathy", type: "yesno" },
                { id: "st_fever_centor", label: "Fever (>38°C)", type: "yesno" },
                { id: "st_no_cough", label: "Absence of cough", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 15. URINARY COMPLAINTS
// ============================================================
{
    id: "urinary",
    name: "Urinary Complaints",
    emoji: "🚽",
    sections: [
        {
            title: "Urinary Symptoms",
            questions: [
                { id: "ur_dysuria", label: "Dysuria (painful urination)", type: "yesno" },
                { id: "ur_frequency", label: "Increased frequency", type: "yesno" },
                { id: "ur_urgency", label: "Urgency", type: "yesno" },
                { id: "ur_hematuria", label: "Hematuria", type: "yesno" },
                { id: "ur_retention", label: "Difficulty voiding / retention", type: "yesno" },
                { id: "ur_incontinence", label: "Incontinence", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "ur_flank_pain", label: "Flank / back pain", type: "yesno" },
                { id: "ur_suprapubic_pain", label: "Suprapubic pain", type: "yesno" },
                { id: "ur_fever", label: "Fever / chills", type: "yesno" },
                { id: "ur_nausea", label: "Nausea / vomiting", type: "yesno" },
                { id: "ur_vaginal_discharge", label: "Vaginal / urethral discharge", type: "yesno" },
                { id: "ur_testicular_pain", label: "Testicular pain / swelling (if male)", type: "yesno" },
            ]
        },
        {
            title: "History",
            questions: [
                { id: "ur_recurrent_uti", label: "Recurrent UTIs", type: "yesno" },
                { id: "ur_kidney_stones", label: "History of kidney stones", type: "yesno" },
                { id: "ur_pregnant", label: "Pregnant or possibly pregnant", type: "yesno" },
                { id: "ur_catheter", label: "Indwelling catheter", type: "yesno" },
                { id: "ur_immunocomp", label: "Immunocompromised / diabetic", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 16. PALPITATIONS
// ============================================================
{
    id: "palpitations",
    name: "Palpitations",
    emoji: "💓",
    sections: [
        {
            title: "Palpitation Characteristics",
            questions: [
                { id: "pp_type", label: "Sensation", type: "chips", options: ["Rapid","Irregular","Skipping","Pounding","Fluttering"] },
                { id: "pp_onset", label: "Onset", type: "chips", options: ["Sudden","Gradual"] },
                { id: "pp_duration", label: "Duration", type: "text", placeholder: "e.g. intermittent, 2 hours" },
                { id: "pp_at_rest", label: "At rest", type: "yesno" },
                { id: "pp_exertional", label: "With exertion", type: "yesno" },
                { id: "pp_still_occurring", label: "Still occurring now", type: "yesno" },
            ]
        },
        {
            title: "Associated Symptoms",
            questions: [
                { id: "pp_chest_pain", label: "Chest pain", type: "yesno" },
                { id: "pp_sob", label: "Shortness of breath", type: "yesno" },
                { id: "pp_syncope", label: "Syncope / presyncope", type: "yesno" },
                { id: "pp_dizziness", label: "Dizziness", type: "yesno" },
                { id: "pp_diaphoresis", label: "Diaphoresis", type: "yesno" },
            ]
        },
        {
            title: "History / Triggers",
            questions: [
                { id: "pp_caffeine", label: "Caffeine / energy drinks", type: "yesno" },
                { id: "pp_stimulants", label: "Stimulants / drugs", type: "yesno" },
                { id: "pp_known_arrhythmia", label: "Known arrhythmia", type: "yesno", sub: [
                    { id: "pp_arrhythmia_type", label: "Type", type: "text", placeholder: "e.g. AFib, SVT" }
                ]},
                { id: "pp_thyroid", label: "Thyroid disease", type: "yesno" },
                { id: "pp_cardiac_hx", label: "Structural heart disease", type: "yesno" },
                { id: "pp_fhx_sudden_death", label: "Family hx sudden death / arrhythmia", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 17. SEIZURE
// ============================================================
{
    id: "seizure",
    name: "Seizure",
    emoji: "⚡",
    sections: [
        {
            title: "Seizure Details",
            questions: [
                { id: "sz_witnessed", label: "Witnessed", type: "yesno" },
                { id: "sz_type", label: "Type of activity", type: "chips", options: ["Generalized tonic-clonic","Focal","Absence","Unknown"] },
                { id: "sz_duration", label: "Duration of seizure", type: "text", placeholder: "e.g. 2 minutes" },
                { id: "sz_aura", label: "Aura / warning", type: "yesno" },
                { id: "sz_post_ictal", label: "Post-ictal state", type: "yesno", sub: [
                    { id: "sz_postictal_duration", label: "Duration of post-ictal", type: "text", placeholder: "" }
                ]},
                { id: "sz_tongue_bite", label: "Tongue bite", type: "yesno" },
                { id: "sz_incontinence", label: "Urinary / fecal incontinence", type: "yesno" },
                { id: "sz_multiple", label: "Multiple seizures", type: "yesno" },
                { id: "sz_back_to_baseline", label: "Back to baseline now", type: "yesno" },
            ]
        },
        {
            title: "Possible Triggers",
            questions: [
                { id: "sz_med_noncompliance", label: "AED noncompliance", type: "yesno" },
                { id: "sz_fever", label: "Fever / infection", type: "yesno" },
                { id: "sz_sleep_deprivation", label: "Sleep deprivation", type: "yesno" },
                { id: "sz_alcohol", label: "Alcohol use / withdrawal", type: "yesno" },
                { id: "sz_drugs", label: "Drug use", type: "yesno" },
                { id: "sz_head_trauma", label: "Recent head trauma", type: "yesno" },
            ]
        },
        {
            title: "History",
            questions: [
                { id: "sz_known_epilepsy", label: "Known epilepsy / seizure disorder", type: "yesno" },
                { id: "sz_first_seizure", label: "First-time seizure", type: "yesno" },
                { id: "sz_current_aed", label: "Current AED medications", type: "text", placeholder: "" },
                { id: "sz_neuro_deficit", label: "Focal neurological deficit on exam", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 18. ALTERED MENTAL STATUS
// ============================================================
{
    id: "altered_mental_status",
    name: "Altered Mental Status",
    emoji: "🧩",
    sections: [
        {
            title: "Mental Status Details",
            questions: [
                { id: "ams_baseline", label: "Baseline mental status", type: "chips", options: ["Alert & oriented","Mild cognitive impairment","Dementia","Unknown"] },
                { id: "ams_current", label: "Current status", type: "chips", options: ["Confused","Lethargic","Obtunded","Unresponsive","Agitated"] },
                { id: "ams_onset", label: "Onset", type: "chips", options: ["Acute (hours)","Subacute (days)","Waxing/waning","Unknown"] },
                { id: "ams_gcs", label: "GCS (if applicable)", type: "text", placeholder: "e.g. E3V4M6 = 13" },
            ]
        },
        {
            title: "Potential Causes (AEIOU-TIPS)",
            questions: [
                { id: "ams_alcohol_drugs", label: "Alcohol / drugs / toxins", type: "yesno", sub: [
                    { id: "ams_substance_desc", label: "Substance", type: "text", placeholder: "" }
                ]},
                { id: "ams_metabolic", label: "Metabolic (DM, renal, hepatic, thyroid)", type: "yesno" },
                { id: "ams_infection", label: "Infection / sepsis (fever, source)", type: "yesno" },
                { id: "ams_structural", label: "Structural (trauma, stroke, mass)", type: "yesno" },
                { id: "ams_seizure", label: "Seizure / post-ictal", type: "yesno" },
                { id: "ams_psych", label: "Psychiatric", type: "yesno" },
                { id: "ams_medication", label: "Medication change / overdose", type: "yesno" },
                { id: "ams_hypoxia", label: "Hypoxia / hypoperfusion", type: "yesno" },
            ]
        },
        {
            title: "Associated Findings",
            questions: [
                { id: "ams_fever", label: "Fever", type: "yesno" },
                { id: "ams_neuro_deficit", label: "Focal neurological deficit", type: "yesno" },
                { id: "ams_neck_stiff", label: "Neck stiffness", type: "yesno" },
                { id: "ams_trauma_signs", label: "Signs of trauma", type: "yesno" },
                { id: "ams_pupils", label: "Pupil abnormality", type: "yesno", sub: [
                    { id: "ams_pupil_desc", label: "Describe", type: "text", placeholder: "e.g. pinpoint, dilated, asymmetric" }
                ]},
            ]
        }
    ]
},

// ============================================================
// 19. RASH
// ============================================================
{
    id: "rash",
    name: "Rash",
    emoji: "🔴",
    sections: [
        {
            title: "Rash Characteristics",
            questions: [
                { id: "ra_location", label: "Location / distribution", type: "text", placeholder: "e.g. trunk, bilateral lower extremities" },
                { id: "ra_type", label: "Type", type: "chips", options: ["Macular","Papular","Vesicular","Petechial/Purpuric","Urticarial","Bullous","Erythematous patch"] },
                { id: "ra_onset", label: "Onset", type: "text", placeholder: "e.g. 2 days ago" },
                { id: "ra_spreading", label: "Spreading", type: "yesno" },
                { id: "ra_pruritic", label: "Pruritic", type: "yesno" },
                { id: "ra_painful", label: "Painful", type: "yesno" },
                { id: "ra_blanching", label: "Blanching", type: "yesno" },
            ]
        },
        {
            title: "Red Flags",
            questions: [
                { id: "ra_fever", label: "Fever", type: "yesno" },
                { id: "ra_mucosal", label: "Mucosal involvement (mouth, eyes, genitals)", type: "yesno" },
                { id: "ra_skin_sloughing", label: "Skin sloughing / blistering", type: "yesno" },
                { id: "ra_hypotension", label: "Hypotension", type: "yesno" },
                { id: "ra_toxic_appear", label: "Toxic / ill-appearing", type: "yesno" },
                { id: "ra_petechiae", label: "Petechiae / purpura (non-blanching)", type: "yesno" },
            ]
        },
        {
            title: "Context",
            questions: [
                { id: "ra_new_med", label: "New medication in last 2 weeks", type: "yesno", sub: [
                    { id: "ra_med_name", label: "Medication", type: "text", placeholder: "" }
                ]},
                { id: "ra_exposure", label: "Exposure (plants, animals, sick contacts)", type: "yesno", sub: [
                    { id: "ra_exposure_desc", label: "Detail", type: "text", placeholder: "" }
                ]},
                { id: "ra_immunocomp", label: "Immunocompromised", type: "yesno" },
                { id: "ra_hx_eczema", label: "History of eczema / dermatitis", type: "yesno" },
            ]
        }
    ]
},

// ============================================================
// 20. EYE COMPLAINT
// ============================================================
{
    id: "eye_complaint",
    name: "Eye Complaint",
    emoji: "👁️",
    sections: [
        {
            title: "Eye Symptoms",
            questions: [
                { id: "ey_affected", label: "Affected eye", type: "chips", options: ["Right","Left","Both"] },
                { id: "ey_primary_sx", label: "Primary symptom", type: "chips", options: ["Pain","Redness","Vision loss","Discharge","Foreign body sensation","Floaters/flashes"] },
                { id: "ey_onset", label: "Onset", type: "chips", options: ["Sudden","Gradual"] },
                { id: "ey_duration", label: "Duration", type: "text", placeholder: "" },
                { id: "ey_vision_change", label: "Vision change", type: "yesno", sub: [
                    { id: "ey_vision_desc", label: "Describe", type: "chips", options: ["Blurry","Complete loss","Partial field loss","Floaters","Flashes","Halos"] },
                ]},
            ]
        },
        {
            title: "Red Flags",
            questions: [
                { id: "ey_sudden_vision_loss", label: "Acute vision loss", type: "yesno" },
                { id: "ey_curtain", label: "Curtain/veil over vision (retinal detachment)", type: "yesno" },
                { id: "ey_severe_pain", label: "Severe pain with nausea (acute glaucoma)", type: "yesno" },
                { id: "ey_chemical_exposure", label: "Chemical exposure", type: "yesno" },
                { id: "ey_penetrating_injury", label: "Penetrating injury / globe rupture concern", type: "yesno" },
                { id: "ey_pain_with_movement", label: "Pain with eye movement", type: "yesno" },
            ]
        },
        {
            title: "Context",
            questions: [
                { id: "ey_trauma", label: "Trauma", type: "yesno" },
                { id: "ey_contact_lenses", label: "Contact lens wearer", type: "yesno" },
                { id: "ey_welding", label: "Welding / UV exposure", type: "yesno" },
                { id: "ey_discharge", label: "Discharge", type: "yesno", sub: [
                    { id: "ey_discharge_type", label: "Type", type: "chips", options: ["Purulent","Watery","Mucoid"] },
                ]},
                { id: "ey_photophobia", label: "Photophobia", type: "yesno" },
            ]
        }
    ]
}

];
