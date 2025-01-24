'use client';

import { Navigation } from '@/components/ui/navigation';

export default function InternPage() {
  return (
    <main className="min-h-screen bg-[#0F2337] text-white">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-gray-200">
            <header>
              <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#20B2AA] via-[#40E0D0] to-white bg-clip-text text-transparent">
                Software Engineer
              </h1>
              <div className="text-[#20B2AA] mb-8">
                <p>Company: PodYar</p>
                <p>Date: January 20, 2025</p>
              </div>
            </header>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">About PodYar</h2>
              <p className="mb-4">
                PodYar is a platform designed to revolutionize how experts share their knowledge and build
                communities. We are leveraging cutting-edge AI to transform documented expertise (spoken,
                written) into engaging, personalized podcasts, facilitating impactful conversations and fighting
                misinformation. We aim to create a single platform where experts can share their knowledge,
                engage with AI hosts, and build communities around their expertise. We believe in the power of
                structured, detailed knowledge sharing and want to help experts scale their impact.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">The Problem We Solve</h2>
              <p>
                In the era of information overload, experts leave behind a wealth of knowledge across different
                platforms. Our platform aims to consolidate the knowledge and expertise, enabling experts to
                create high-quality, engaging podcasts through AI-powered conversations with their chosen
                "idols." We tackle challenges such as the arduous podcast creation process and misinformation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">What We Are Building</h2>
              <p>
                We offer experts a seamless, effortless and cost-effective solution for transforming their
                expertise into high-quality podcasts, eliminating the complexities and costs associated with
                traditional podcast production.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">What we are looking for</h2>
              <p>
                Bootcamp grads who are willing to learn fast, hop in the code, and have an outsized impact. You
                will be instrumental in building and scaling our core product. This is an exciting opportunity to
                shape the technical direction of a groundbreaking platform and contribute significantly to its
                success.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">Musts and Non-negotiables</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">Smart, creative and proactive Problem Solver:</span> Someone who identifies and
                troubleshoots technical challenges, by hyperfocusing on the right problem and solving it
                the most creative and efficient way.</li>
                <li><span className="font-semibold">Collaborative:</span> Work closely with the core team to align technical implementation with
                the overall product vision.</li>
                <li><span className="font-semibold">Technical acumen:</span> Understands key architectural decisions, and ensures scalability,
                security, and maintainability of our platform.</li>
                <li><span className="font-semibold">Stay Current:</span> Continuously research, learn, and evaluate new technologies.</li>
                <li><span className="font-semibold">Independent & Proactive:</span> Ability to work autonomously and drive progress with
                minimal supervision.</li>
                <li><span className="font-semibold">Communication:</span> Strong verbal and written communication skills.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">Responsibilities</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-[#40E0D0] mb-2">Core Platform Development</h3>
                  <p className="mb-2">Design, develop, test, and deploy our core platform features, including:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Intake pipelines for various input types (audio, transcripts, resumes, etc.).</li>
                    <li>AI-powered podcast generation logic (conversation generation, voice cloning,
                    audio processing, text to speech).</li>
                    <li>User interface for experts to interact with the platform and manage their content.</li>
                    <li>Community features for users to connect with like-minded individuals.</li>
                    <li>Data storage and retrieval systems.</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold text-[#40E0D0] mb-2">Iteration & Experimentation</h3>
                  <p>Contribute to product development by iterating quickly on prototypes to validate our Minimum Delightful Product (MDP) and adapt based on feedback.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#40E0D0] mb-2">AI Integration</h3>
                  <p>Knowledgable or fully invested in learning (fast) how to deeply integrate Azure, OpenAI, and other AI/ML services into the platform.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#40E0D0] mb-2">Quality Assurance</h3>
                  <p>Ensure a high standard of code quality, testing, and performance.</p>
                </div>

                <div>
                  <h3 className="font-semibold text-[#40E0D0] mb-2">Technical Documentation</h3>
                  <p>Create technical documentation to support the platform's growth and future development.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">Key Focus Areas for Iteration</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">Iterating on Early Prototypes:</span> We will be working iteratively on different prototypes,
                each focusing on a different approach to creating podcasts with AI, to validate user value
                and collect user feedback.</li>
                <li><span className="font-semibold">Text-to-Podcast Automation:</span> Develop the process of automating podcast generation
                using transcribed content, AI-generated conversation and voice cloning.</li>
                <li><span className="font-semibold">Transcription & Audio Realism:</span> Improve the quality of transcripts, explore different
                ways to create realistic podcast-like conversation, and match audio quality to leading
                examples in the field.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">Technical Requirements</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><span className="font-semibold">Experience:</span> 3+ years of experience in any field (with track record of gained expertise in
                the given field, even if non-technical) and a proven ability to build complex systems and
                work with ambiguity.</li>
                <li><span className="font-semibold">Full-Stack Expertise:</span> Proficiency in front-end (Next.js/TypeScript) and back-end
                (Python/FastAPI) technologies.</li>
                <li><span className="font-semibold">Cloud Platforms:</span> Experience with Azure, and its AI offerings (OpenAI).</li>
                <li><span className="font-semibold">Databases:</span> Experience with databases, preferably Postgres or similar SQL databases.</li>
                <li><span className="font-semibold">Storage:</span> Experience with Blob storage or similar cloud storage solutions.</li>
                <li><span className="font-semibold">API Design:</span> Strong understanding of API design and implementation.</li>
                <li><span className="font-semibold">AI/ML:</span> Experience integrating and deploying AI/ML solutions.</li>
                <li><span className="font-semibold">Software Development Lifecycle:</span> Solid understanding of software development
                principles (Agile, DevOps).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">Bonus Points</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Prior experience in early-stage startup environments.</li>
                <li>Experience with audio processing and speech technologies.</li>
                <li>Interest in podcasting and content creation.</li>
                <li>Contributions to open-source projects.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">Our Current Tech Stack</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Frontend: Next.js (TypeScript)</li>
                <li>Backend: Python (FastAPI)</li>
                <li>Cloud: Azure</li>
                <li>AI/ML: OpenAI Services, Azure AI</li>
                <li>Database: Postgres</li>
                <li>Storage: Azure Blob Storage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">The initial goals for the role include</h2>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Build and validate the different prototypes, to validate user value and collect user feedback</li>
                <li>Develop an end to end system and tech stack described above.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">What We Offer</h2>
              <p className="mb-4">
                The opportunity to join a stealth project and make a significant impact, learning Google's
                Product Excellence Methodology (working with one of the engineers who invented it at
                Google)
              </p>
              <p>
                A collaborative and fast-paced work environment, working on cutting-edge technologies,
                in an interesting and innovative problem space.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4 text-[#20B2AA]">How to Apply</h2>
              <p>
                Please send your resume and a cover letter to JoinUs@podyar.com and express interest in our current
                problems to be solved. We are looking for someone who shares our passion for innovation and
                is excited to shape the future of content creation.
              </p>
            </section>

            <section className="text-sm text-gray-400 italic">
              <p>
                Note: This job description reflects our goals as of January 6, 2025. Our direction may evolve
                based on market feedback and product validation, and this role will evolve along with our
                journey.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}