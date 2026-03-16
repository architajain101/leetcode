import { useState } from "react";

const stages = [
  {
    id: 1,
    title: "Foundations",
    duration: "Weeks 1–4",
    accent: "#2563eb",
    tag: "START HERE",
    skills: ["Linear Algebra", "Probability Basics", "Calculus Concepts", "Logical Thinking"],
    tools: ["Khan Academy", "3Blue1Brown", "MIT OCW"],
    practice: [
      "Solve 20 math problems daily",
      "Complete Khan Academy Statistics module",
      "Watch 3B1B Essence of Linear Algebra"
    ],
    resources: ["Khan Academy", "MIT OpenCourseWare", "3Blue1Brown (YouTube)"],
    checkpoint: "Can you compute matrix operations, solve basic probability problems, and understand the intuition behind derivatives?"
  },
  {
    id: 2,
    title: "Programming",
    duration: "Weeks 5–10",
    accent: "#0891b2",
    tag: "CORE SKILL",
    skills: ["Python Fundamentals", "OOP Concepts", "SQL Basics", "Version Control (Git)"],
    tools: ["Python", "VS Code", "MySQL", "Jupyter Notebook", "Git / GitHub"],
    practice: [
      "Build a command-line calculator & to-do app",
      "Write 5 SQL queries daily on real datasets",
      "Solve 30 LeetCode Easy problems"
    ],
    resources: ["CS50P – Harvard (free)", "SQLZoo", "W3Schools Python", "GitHub Docs"],
    checkpoint: "Can you write clean Python scripts, query a relational database, and push code to GitHub?"
  },
  {
    id: 3,
    title: "Data Analysis",
    duration: "Weeks 11–16",
    accent: "#7c3aed",
    tag: "WORKHORSE",
    skills: ["NumPy & Pandas", "Data Cleaning", "EDA Techniques", "Feature Engineering"],
    tools: ["NumPy", "Pandas", "Jupyter Notebook", "Google Colab"],
    practice: [
      "Analyze Titanic & Iris datasets end-to-end",
      "Clean a messy real-world CSV file",
      "Complete Kaggle Learn: Pandas course"
    ],
    resources: ["Kaggle Learn – Pandas", "Real Python", "Towards Data Science", "Pandas Docs"],
    checkpoint: "Can you load, clean, transform, and extract actionable insights from a raw dataset?"
  },
  {
    id: 4,
    title: "Data Visualization",
    duration: "Weeks 17–20",
    accent: "#059669",
    tag: "COMMUNICATE",
    skills: ["Matplotlib & Seaborn", "Plotly (Interactive)", "Dashboard Design", "Storytelling with Data"],
    tools: ["Matplotlib", "Seaborn", "Plotly", "Tableau Public", "Power BI"],
    practice: [
      "Create 10 chart types from the same dataset",
      "Build an interactive Plotly dashboard",
      "Publish a Tableau Public visualization"
    ],
    resources: ["Seaborn Docs", "Tableau Public Gallery", "Storytelling with Data (book)", "Plotly Docs"],
    checkpoint: "Can you choose the right chart type, design a clean dashboard, and explain findings visually?"
  },
  {
    id: 5,
    title: "Statistics & Math",
    duration: "Weeks 21–26",
    accent: "#b45309",
    tag: "DEPTH",
    skills: ["Descriptive Statistics", "Inferential Statistics", "Hypothesis Testing", "Regression Math", "Bayesian Thinking"],
    tools: ["SciPy", "StatsModels", "Python", "Excel"],
    practice: [
      "Run A/B test simulation from scratch",
      "Conduct hypothesis tests on real datasets",
      "Build linear regression without libraries"
    ],
    resources: ["StatQuest (YouTube)", "Think Stats – free PDF", "Coursera Statistics – Duke Univ.", "Khan Academy Stats"],
    checkpoint: "Can you run a hypothesis test, interpret p-values, and explain the difference between correlation and causation?"
  },
  {
    id: 6,
    title: "Machine Learning",
    duration: "Weeks 27–38",
    accent: "#dc2626",
    tag: "CORE ML",
    skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Ensemble Methods", "Deep Learning Intro", "NLP Basics"],
    tools: ["Scikit-learn", "XGBoost", "TensorFlow / Keras", "HuggingFace", "NLTK"],
    practice: [
      "Predict house prices (regression)",
      "Customer segmentation (clustering)",
      "Sentiment analysis on Twitter data",
      "Image classifier with Keras"
    ],
    resources: ["Andrew Ng – ML Specialization (Coursera)", "Fast.ai", "Scikit-learn Docs", "Hands-On ML (book)"],
    checkpoint: "Can you build, train, evaluate, tune, and improve an ML model end-to-end?"
  },
  {
    id: 7,
    title: "Real-World Projects",
    duration: "Weeks 39–46",
    accent: "#0f766e",
    tag: "BUILD",
    skills: ["ML Pipelines", "Model Deployment", "REST APIs", "Cloud Basics", "Docker Intro"],
    tools: ["Flask / FastAPI", "Streamlit", "Docker", "AWS S3 / GCP", "GitHub Actions"],
    practice: [
      "Deploy an ML model as a REST API",
      "Build a Streamlit app with live predictions",
      "Enter a Kaggle competition (Top 30% goal)",
      "Contribute to an open-source DS project"
    ],
    resources: ["Streamlit Docs", "Full Stack Deep Learning", "AWS Free Tier", "Towards Data Science"],
    checkpoint: "Do you have 3+ complete, deployed projects with documented code on GitHub?"
  },
  {
    id: 8,
    title: "Portfolio & Career",
    duration: "Weeks 47–52",
    accent: "#4f46e5",
    tag: "LAUNCH",
    skills: ["GitHub Portfolio", "Resume Writing", "LinkedIn Optimization", "DS Interview Prep", "Case Study Practice"],
    tools: ["GitHub Pages", "LinkedIn", "Notion", "LeetCode", "interviewing.io"],
    practice: [
      "Write 5 technical blog posts on Medium",
      "Do mock interviews weekly",
      "Apply to 10 internships / entry-level roles",
      "Practice SQL & stats interview questions daily"
    ],
    resources: ["Ace the Data Science Interview (book)", "interviewing.io", "Blind (forum)", "DataLemur SQL practice"],
    checkpoint: "Do you have a polished portfolio, optimized LinkedIn, and can you confidently answer DS interview questions?"
  }
];

export default function DSRoadmap() {
  const [activeStage, setActiveStage] = useState(null);
  const [completed, setCompleted] = useState(new Set());

  const toggle = (id) => setActiveStage(prev => prev === id ? null : id);
  const toggleDone = (id, e) => {
    e.stopPropagation();
    setCompleted(prev => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const pct = Math.round((completed.size / stages.length) * 100);

  return (
    <div style={{
      minHeight: "100vh",
      background: "#fafaf9",
      fontFamily: "'Georgia', 'Times New Roman', serif",
      color: "#1c1917",
      padding: "48px 20px 80px"
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=DM+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; }
        .stage-card { transition: box-shadow 0.2s, border-color 0.2s; }
        .stage-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.08) !important; }
        .expand-btn:hover { opacity: 0.7; }
        .done-btn:hover { opacity: 0.8; }
        .pill { display: inline-block; }
      `}</style>

      <div style={{ maxWidth: 760, margin: "0 auto" }}>

        {/* Header */}
        <div style={{ marginBottom: 56, borderBottom: "2px solid #1c1917", paddingBottom: 32 }}>
          <div style={{
            fontFamily: "'Libre Baskerville', serif",
            fontSize: "clamp(26px, 4vw, 42px)",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 12
          }}>
            Data Scientist
            <br />
            <span style={{ fontStyle: "italic", fontWeight: 400, color: "#78716c" }}>Complete Roadmap</span>
          </div>
          <p style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 12,
            color: "#a8a29e",
            letterSpacing: "0.08em",
            margin: "0 0 24px"
          }}>
            FROM BEGINNER → INDUSTRY-READY · 52 WEEKS · 8 STAGES
          </p>

          {/* Progress */}
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{
              flex: 1, height: 3, background: "#e7e5e4", borderRadius: 2, overflow: "hidden"
            }}>
              <div style={{
                height: "100%",
                width: `${pct}%`,
                background: "#1c1917",
                borderRadius: 2,
                transition: "width 0.4s ease"
              }} />
            </div>
            <span style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 11,
              color: "#78716c",
              minWidth: 80
            }}>
              {completed.size}/{stages.length} complete
            </span>
          </div>
        </div>

        {/* Stages */}
        <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {stages.map((stage, idx) => {
            const isOpen = activeStage === stage.id;
            const isDone = completed.has(stage.id);

            return (
              <div key={stage.id}>
                {/* Connector */}
                {idx > 0 && (
                  <div style={{
                    display: "flex", alignItems: "center", padding: "0 0 0 28px", height: 28
                  }}>
                    <div style={{ width: 1, height: 28, background: "#d6d3d1", marginLeft: 11 }} />
                  </div>
                )}

                <div
                  className="stage-card"
                  onClick={() => toggle(stage.id)}
                  style={{
                    border: `1px solid ${isOpen ? stage.accent : "#e7e5e4"}`,
                    borderRadius: 10,
                    background: isDone ? "#fafaf9" : "#fff",
                    padding: "20px 24px",
                    cursor: "pointer",
                    boxShadow: isOpen ? `0 2px 16px rgba(0,0,0,0.06)` : "none",
                    opacity: isDone ? 0.65 : 1,
                    position: "relative"
                  }}
                >
                  {/* Top row */}
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>

                    {/* Number */}
                    <div style={{
                      width: 24, height: 24,
                      borderRadius: "50%",
                      background: isDone ? stage.accent : isOpen ? stage.accent : "#e7e5e4",
                      color: isDone || isOpen ? "#fff" : "#a8a29e",
                      fontFamily: "'DM Mono', monospace",
                      fontSize: 11,
                      fontWeight: 500,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                      transition: "background 0.2s"
                    }}>
                      {isDone ? "✓" : idx + 1}
                    </div>

                    {/* Title + tag */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 12, flexWrap: "wrap" }}>
                        <span style={{
                          fontFamily: "'Libre Baskerville', serif",
                          fontSize: "clamp(14px, 2.5vw, 17px)",
                          fontWeight: 700,
                          color: isOpen ? stage.accent : "#1c1917",
                          transition: "color 0.2s"
                        }}>
                          {stage.title}
                        </span>
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 9,
                          letterSpacing: "0.12em",
                          color: stage.accent,
                          background: `${stage.accent}12`,
                          padding: "2px 8px",
                          borderRadius: 3
                        }}>
                          {stage.tag}
                        </span>
                      </div>
                      <div style={{
                        fontFamily: "'DM Mono', monospace",
                        fontSize: 10,
                        color: "#a8a29e",
                        marginTop: 2
                      }}>
                        {stage.duration}
                      </div>
                    </div>

                    {/* Skills preview */}
                    <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: "flex-end", maxWidth: 280 }}>
                      {stage.skills.slice(0, 2).map(s => (
                        <span key={s} style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 9,
                          color: "#78716c",
                          background: "#f5f5f4",
                          padding: "2px 8px",
                          borderRadius: 3
                        }}>
                          {s}
                        </span>
                      ))}
                      {stage.skills.length > 2 && (
                        <span style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 9,
                          color: "#a8a29e"
                        }}>
                          +{stage.skills.length - 2}
                        </span>
                      )}
                    </div>

                    {/* Arrow */}
                    <div style={{
                      color: "#a8a29e",
                      fontSize: 12,
                      transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.25s",
                      flexShrink: 0
                    }}>▼</div>
                  </div>

                  {/* Expanded */}
                  {isOpen && (
                    <div style={{ marginTop: 24, paddingTop: 24, borderTop: "1px solid #f5f5f4" }}>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>

                        {/* Left column */}
                        <div>
                          <Section title="Skills to Learn" accent={stage.accent}>
                            {stage.skills.map(s => (
                              <SkillRow key={s} text={s} accent={stage.accent} />
                            ))}
                          </Section>

                          <Section title="Tools & Libraries" accent={stage.accent}>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                              {stage.tools.map(t => (
                                <span key={t} style={{
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: 10,
                                  color: "#44403c",
                                  background: "#f5f5f4",
                                  border: "1px solid #e7e5e4",
                                  padding: "3px 10px",
                                  borderRadius: 4
                                }}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          </Section>
                        </div>

                        {/* Right column */}
                        <div>
                          <Section title="Practice Tasks" accent={stage.accent}>
                            {stage.practice.map((p, i) => (
                              <div key={i} style={{
                                display: "flex", gap: 8, marginBottom: 8, alignItems: "flex-start"
                              }}>
                                <span style={{
                                  fontFamily: "'DM Mono', monospace",
                                  fontSize: 9,
                                  color: stage.accent,
                                  marginTop: 3,
                                  flexShrink: 0
                                }}>
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <span style={{ fontSize: 12, color: "#44403c", lineHeight: 1.5 }}>{p}</span>
                              </div>
                            ))}
                          </Section>

                          <Section title="Resources" accent={stage.accent}>
                            {stage.resources.map((r, i) => (
                              <div key={i} style={{
                                fontFamily: "'DM Mono', monospace",
                                fontSize: 10,
                                color: "#78716c",
                                marginBottom: 5,
                                paddingLeft: 12,
                                borderLeft: `2px solid ${stage.accent}33`
                              }}>
                                {r}
                              </div>
                            ))}
                          </Section>
                        </div>
                      </div>

                      {/* Checkpoint */}
                      <div style={{
                        marginTop: 20,
                        padding: "16px 20px",
                        background: `${stage.accent}08`,
                        border: `1px solid ${stage.accent}22`,
                        borderRadius: 8
                      }}>
                        <div style={{
                          fontFamily: "'DM Mono', monospace",
                          fontSize: 9,
                          letterSpacing: "0.15em",
                          color: stage.accent,
                          marginBottom: 8
                        }}>
                          CHECKPOINT — BEFORE MOVING ON
                        </div>
                        <p style={{
                          fontSize: 13,
                          color: "#44403c",
                          margin: 0,
                          lineHeight: 1.7,
                          fontStyle: "italic"
                        }}>
                          {stage.checkpoint}
                        </p>
                      </div>

                      {/* Mark done */}
                      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 16 }}>
                        <button
                          className="done-btn"
                          onClick={(e) => toggleDone(stage.id, e)}
                          style={{
                            fontFamily: "'DM Mono', monospace",
                            fontSize: 10,
                            letterSpacing: "0.1em",
                            padding: "8px 18px",
                            borderRadius: 6,
                            border: `1px solid ${isDone ? stage.accent : "#d6d3d1"}`,
                            background: isDone ? stage.accent : "transparent",
                            color: isDone ? "#fff" : "#78716c",
                            cursor: "pointer",
                            transition: "all 0.2s"
                          }}
                        >
                          {isDone ? "✓ COMPLETED" : "MARK AS COMPLETE"}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div style={{
          marginTop: 56,
          paddingTop: 32,
          borderTop: "1px solid #e7e5e4",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 12
        }}>
          <div>
            <div style={{
              fontFamily: "'Libre Baskerville', serif",
              fontSize: 18,
              fontWeight: 700,
              marginBottom: 4
            }}>
              {completed.size === stages.length ? "🎓 Roadmap Complete" : "Keep going."}
            </div>
            <div style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: 10,
              color: "#a8a29e"
            }}>
              {completed.size === stages.length
                ? "You're industry-ready. Start applying."
                : `${stages.length - completed.size} stage${stages.length - completed.size !== 1 ? "s" : ""} remaining`}
            </div>
          </div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 28,
            fontWeight: 500,
            color: "#e7e5e4"
          }}>
            {pct}%
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, accent, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 9,
        letterSpacing: "0.15em",
        color: accent,
        marginBottom: 10,
        textTransform: "uppercase"
      }}>
        {title}
      </div>
      {children}
    </div>
  );
}

function SkillRow({ text, accent }) {
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 8, marginBottom: 6
    }}>
      <div style={{
        width: 4, height: 4, borderRadius: "50%",
        background: accent, flexShrink: 0
      }} />
      <span style={{ fontSize: 12, color: "#44403c" }}>{text}</span>
    </div>
  );
}