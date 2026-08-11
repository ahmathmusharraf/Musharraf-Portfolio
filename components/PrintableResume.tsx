import React from 'react';
import { PERSONAL_INFO, EXPERIENCES, EDUCATION, SKILL_CATEGORIES, LANGUAGES, CERTIFICATIONS } from '../constants';

const PrintableResume: React.FC = () => {
  return (
    <div className="mx-auto bg-slate-900 print:bg-white min-h-screen w-full flex flex-col items-center py-6 md:py-12 px-2 sm:px-4">
      <style>{`
        @media screen {
          .cv-page {
            box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.5);
            margin: 1.5rem auto;
            border-radius: 8px;
            border: 1px solid #e2e8f0;
          }
        }
        @media screen and (max-width: 840px) {
          .cv-page-container {
            width: 100%;
            overflow-x: auto;
          }
          .cv-page {
            min-width: 210mm;
            zoom: 0.85;
            margin: 1rem auto !important;
          }
        }
        @media screen and (max-width: 640px) {
          .cv-page {
            zoom: 0.65;
          }
        }
        @media screen and (max-width: 480px) {
          .cv-page {
            zoom: 0.5;
          }
        }
        @media print {
          @page { 
            size: A4; 
            margin: 0; 
          }
          body { 
            background: white !important; 
            -webkit-print-color-adjust: exact; 
          }
          .cv-page { 
            box-shadow: none !important; 
            margin: 0 !important; 
            border: none !important;
            border-radius: 0 !important;
            page-break-after: always;
            page-break-inside: avoid;
            height: 297mm !important;
            max-height: 297mm !important;
          }
          .cv-page:last-child { 
            page-break-after: avoid; 
          }
        }

        /* ATS Optimized Professional A4 Container */
        .cv-page {
          background: white;
          width: 210mm;
          min-height: 297mm;
          padding: 12mm 15mm;
          color: #0f172a;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          line-height: 1.45;
          position: relative;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .ats-header {
          border-bottom: 2px solid #1e293b;
          padding-bottom: 10px;
          margin-bottom: 12px;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
        }

        .ats-name { 
          font-size: 22pt; 
          font-weight: 900; 
          letter-spacing: -0.03em;
          color: #0f172a;
          line-height: 1.1;
          margin-bottom: 3px;
        }

        .ats-roles {
          font-size: 8.5pt;
          font-weight: 800;
          color: #4f46e5;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .header-contact {
          text-align: right;
          font-size: 8pt;
          color: #334155;
          line-height: 1.5;
          font-weight: 500;
        }

        .header-contact a {
          color: #4f46e5;
          font-weight: 600;
          text-decoration: none;
        }

        .ats-section-title {
          font-size: 9.5pt;
          font-weight: 800;
          text-transform: uppercase;
          padding: 3px 0;
          margin-top: 10px;
          margin-bottom: 8px;
          letter-spacing: 0.12em;
          border-bottom: 1.5px solid #cbd5e1;
          color: #0f172a;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .ats-summary {
          font-size: 8.5pt;
          line-height: 1.5;
          margin-bottom: 10px;
          color: #334155;
          text-align: justify;
        }

        .ats-skills-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 6px 16px;
          margin-bottom: 10px;
        }

        .ats-skill-item {
          font-size: 8pt;
          line-height: 1.35;
          color: #334155;
        }

        .ats-skill-item strong {
          color: #0f172a;
          font-weight: 700;
        }

        .ats-exp-item {
          margin-bottom: 10px;
        }

        .ats-exp-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 9.5pt;
          font-weight: 800;
          color: #0f172a;
        }

        .ats-exp-sub {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          font-size: 8.5pt;
          font-weight: 700;
          color: #4f46e5;
          margin-bottom: 3px;
        }

        .ats-bullet-list {
          margin: 0 0 4px 10px;
          padding: 0;
          list-style-type: disc;
          font-size: 8pt;
          color: #334155;
        }

        .ats-bullet-list li {
          margin-bottom: 2.5px;
          padding-left: 2px;
          line-height: 1.35;
        }

        .ats-footer {
          margin-top: auto;
          text-align: center;
          font-size: 7.5pt;
          color: #94a3b8;
          border-top: 1px solid #f1f5f9;
          padding-top: 6px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          font-weight: 600;
        }
      `}</style>

      {/* PAGE 1: Header, Executive Summary, Technical Skills & Core UAE Experience */}
      <div className="cv-page">
        <div>
          {/* Header */}
          <div className="ats-header">
            <div>
              <div className="ats-name">{PERSONAL_INFO.name.toUpperCase()}</div>
              <div className="ats-roles">{PERSONAL_INFO.title}</div>
              <div className="text-[8pt] font-black text-rose-600 tracking-wider uppercase mt-1">{PERSONAL_INFO.availability}</div>
            </div>
            <div className="header-contact">
              <div>Dubai, United Arab Emirates</div>
              <div>{PERSONAL_INFO.phone}</div>
              <div><a href={`mailto:${PERSONAL_INFO.email}`}>{PERSONAL_INFO.email}</a></div>
              <div><a href="https://linkedin.com/in/ahmathmusharraf/" target="_blank" rel="noreferrer">linkedin.com/in/ahmathmusharraf</a></div>
              <div><a href="https://linktr.ee/ahmathmusharraf" target="_blank" rel="noreferrer">linktr.ee/ahmathmusharraf</a></div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="ats-section-title">Executive Summary</div>
          <div className="ats-summary">{PERSONAL_INFO.summary}</div>

          {/* Core Competencies */}
          <div className="ats-section-title">Core Competencies & Expertise</div>
          <div className="ats-skills-grid">
            {SKILL_CATEGORIES.slice(0, 8).map(cat => (
              <div key={cat.name} className="ats-skill-item">
                <strong>{cat.name}:</strong> {cat.skills.slice(0, 6).join(", ")}
              </div>
            ))}
          </div>

          {/* Professional Experience (UAE Roles) */}
          <div className="ats-section-title">Professional Experience</div>

          {/* Role 1 */}
          <div className="ats-exp-item">
            <div className="ats-exp-header">
              <span>{EXPERIENCES[0].role.toUpperCase()}</span>
              <span className="font-semibold text-xs">{EXPERIENCES[0].period}</span>
            </div>
            <div className="ats-exp-sub">
              <span>{EXPERIENCES[0].company}</span>
              <span className="text-xs font-semibold text-slate-500">{EXPERIENCES[0].location}</span>
            </div>
            <ul className="ats-bullet-list">
              {EXPERIENCES[0].description.slice(0, 5).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Role 2 */}
          <div className="ats-exp-item">
            <div className="ats-exp-header">
              <span>SOCIAL MEDIA MANAGER & BRAND DESIGNER</span>
              <span className="font-semibold text-xs">Jan 2025 – Sep 2025</span>
            </div>
            <div className="ats-exp-sub">
              <span>IBM International Real Estate LLC (Contract)</span>
              <span className="text-xs font-semibold text-slate-500">Dubai, UAE</span>
            </div>
            <ul className="ats-bullet-list">
              {EXPERIENCES[1].description.slice(0, 6).map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="ats-footer">{PERSONAL_INFO.name} | Curriculum Vitae | Page 1 of 2</div>
      </div>

      {/* PAGE 2: Additional Experience, Education, Certifications & Portfolio Links */}
      <div className="cv-page">
        <div>
          {/* Professional Experience Continued */}
          <div className="ats-section-title" style={{ marginTop: 0 }}>Professional Experience (Continued)</div>

          {/* Role 3 */}
          <div className="ats-exp-item">
            <div className="ats-exp-header">
              <span>SENIOR DIGITAL MARKETING SPECIALIST</span>
              <span className="font-semibold text-xs">Jan 2023 – Dec 2024</span>
            </div>
            <div className="ats-exp-sub">
              <span>British College of Applied Studies (BCAS Campus)</span>
              <span className="text-xs font-semibold text-slate-500">Colombo, Sri Lanka</span>
            </div>
            <ul className="ats-bullet-list">
              {EXPERIENCES[2].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Role 4 */}
          <div className="ats-exp-item">
            <div className="ats-exp-header">
              <span>SOCIAL MEDIA MARKETING SPECIALIST</span>
              <span className="font-semibold text-xs">Oct 2020 – Dec 2022</span>
            </div>
            <div className="ats-exp-sub">
              <span>Dr. Jameel Memorial Hospital</span>
              <span className="text-xs font-semibold text-slate-500">Colombo, Sri Lanka</span>
            </div>
            <ul className="ats-bullet-list">
              {EXPERIENCES[3].description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Educational Foundation */}
          <div className="ats-section-title">Educational Qualifications</div>
          <div className="space-y-2.5 mb-3">
            {EDUCATION.map(edu => (
              <div key={edu.id} className="ats-exp-item" style={{ marginBottom: '4px' }}>
                <div className="ats-exp-header" style={{ fontSize: '8.5pt' }}>
                  <span>{edu.degree}</span>
                  <span className="text-xs font-semibold text-slate-600">{edu.period}</span>
                </div>
                <div className="ats-exp-sub" style={{ fontSize: '8pt' }}>
                  <span>{edu.institution}</span>
                  <span className="text-slate-500">{edu.location}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Certifications & Languages Grid */}
          <div className="ats-section-title">Certifications & Languages</div>
          <div className="grid grid-cols-12 gap-4 mb-3 text-[8pt]">
            <div className="col-span-8">
              <strong className="block mb-1 text-slate-900 font-bold uppercase tracking-wider text-[7.5pt]">Key Certifications</strong>
              <ul className="ats-bullet-list" style={{ marginLeft: '8px' }}>
                {CERTIFICATIONS.slice(0, 6).map((cert, idx) => (
                  <li key={idx}>{cert}</li>
                ))}
              </ul>
            </div>
            <div className="col-span-4 border-l border-slate-200 pl-3">
              <strong className="block mb-1 text-indigo-600 font-bold uppercase tracking-wider text-[7.5pt]">Languages</strong>
              <div className="text-slate-700 leading-relaxed font-medium mb-3">
                {LANGUAGES.join(" • ")}
              </div>
            </div>
          </div>

          {/* Digital Portfolios */}
          <div className="ats-section-title">Verified Portfolio Links</div>
          <div className="grid grid-cols-2 gap-4 text-[8pt]">
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-bold mb-0.5">Linktree Portfolio Hub:</strong>
              <a href="https://linktr.ee/ahmathmusharraf" target="_blank" rel="noreferrer" className="text-indigo-600 font-semibold hover:underline">
                linktr.ee/ahmathmusharraf
              </a>
            </div>
            <div className="p-2.5 bg-slate-50 rounded-lg border border-slate-200">
              <strong className="block text-slate-900 font-bold mb-0.5">LinkedIn Profile:</strong>
              <a href="https://linkedin.com/in/ahmathmusharraf" target="_blank" rel="noreferrer" className="text-indigo-600 font-semibold hover:underline">
                linkedin.com/in/ahmathmusharraf
              </a>
            </div>
          </div>
        </div>

        <div className="ats-footer">{PERSONAL_INFO.name} | Curriculum Vitae | Page 2 of 2</div>
      </div>
    </div>
  );
};

export default PrintableResume;
