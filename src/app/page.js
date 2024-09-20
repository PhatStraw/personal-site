import { Github, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white px-8 font-mono">
      <main className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">PS.</h1>

        <p className="mb-8">
          Builder with a passion for creating impactful consumer products.
          Currently focused on developing social platforms that aim to add
          positivity to the world.
        </p>

        <h2 className="text-2xl font-bold mb-4">projects</h2>

        <p className="mb-4">
          most of my projects on{" "}
          <a
            href="https://github.com/PhatStraw"
            className="text-green-400 hover:underline"
          >
            github
          </a>{" "}
          are private. If you&apos;re interested in what I&apos;m working on,
          reach out to{" "}
          <a
            href="mailto:phatstraws@gmail.com"
            className="text-green-400 hover:underline"
          >
            me
          </a>
          .
        </p>

        <p className="mb-4">
          some interesting projects that are public of note are:
        </p>

        <ul className="list-disc list-inside mb-8">
          <li className="mb-2">
            <a
              href="https://github.com/PhatStraw/safe-monitor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Safe Monitor:
            </a>{" "}
            a web app that helps parents monitor their children&apos;s online
            activities.{" "}
            <a
              href="https://safe-monitor.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Live Demo
            </a>
          </li>
          <li className="mb-2">
            <a
              href="https://github.com/PhatStraw/Pump-fun-bundler"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Pump-fun-bundler:
            </a>{" "}
            The easiest way to create and bundle up to 4 wallets for Pump.fun
            token launches.
          </li>
          <li>
            <span className="text-green-400">Smart Audit:</span> a tool for
            auditing smart contracts, available at{" "}
            <a
              href="https://github.com/PhatStraw/smart-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              GitHub
            </a>{" "}
            and{" "}
            <a
              href="https://smart-audit-xi.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Live Demo
            </a>
            .
          </li>
          <li className="mb-2">
            <a
              href="https://github.com/PhatStraw/ask-gary-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-400 hover:underline"
            >
              Ask Gary Tan:
            </a>{" "}
            an AI tool for conversating with and getting insights from Garry
            Tan.
          </li>
        </ul>

        <h2 className="text-2xl font-bold mb-4">connect</h2>

        <div className="flex space-x-4">
          <a
            href="https://github.com/PhatStraw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:phatstraws@gmail.com"
            className="text-white hover:text-green-400"
          >
            <Mail size={24} />
          </a>
          <a
            href="https://x.com/PhatStraws"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400"
          >
            <Twitter size={24} />
          </a>
        </div>
      </main>

      <footer className="mt-16 text-center text-sm text-gray-500">
        © 2024 Phat
      </footer>
    </div>
  );
}
