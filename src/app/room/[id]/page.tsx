"use client";

import { useState } from "react";
import { Mic, Video, Users, Play, Square, Pause, Target, AlertCircle } from "lucide-react";

export default function MeetingRoom() {
  const [isRecording, setIsRecording] = useState(false);
  const [activeTab, setActiveTab] = useState("agenda"); // agenda, chat, notes

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col md:flex-row gap-4">
      {/* Main Video/Content Area */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Top Bar */}
        <div className="card py-3 px-4 flex justify-between items-center rounded-lg">
          <div>
            <h1 className="text-xl font-bold">Project Phoenix Sync</h1>
            <div className="text-sm text-text-muted flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-success"></span>
              Live • 00:15:32
            </div>
          </div>
          <div className="flex items-center gap-2">
            {!isRecording ? (
              <button
                onClick={() => setIsRecording(true)}
                className="btn-secondary flex items-center gap-2 text-error border-error/20 hover:bg-error/5"
              >
                <Play className="h-4 w-4" /> Start Recording
              </button>
            ) : (
              <div className="flex gap-2">
                <button className="btn-secondary flex items-center gap-2 text-warning border-warning/20">
                  <Pause className="h-4 w-4" /> Pause
                </button>
                <button
                  onClick={() => setIsRecording(false)}
                  className="btn-secondary flex items-center gap-2 text-error border-error/20"
                >
                  <Square className="h-4 w-4" /> Stop
                </button>
              </div>
            )}
            <button className="btn-primary bg-error hover:bg-red-700">End Meeting</button>
          </div>
        </div>

        {/* Video Grid (Placeholder) */}
        <div className="flex-1 bg-gray-900 rounded-lg relative overflow-hidden flex items-center justify-center border border-border">
          <div className="text-gray-500 flex flex-col items-center">
            <Video className="h-16 w-16 mb-4 opacity-50" />
            <p>Waiting for video feed...</p>
            <p className="text-sm mt-2">Audio recording active for transcription.</p>
          </div>

          {/* Controls Overlay */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 bg-gray-800/80 backdrop-blur px-6 py-3 rounded-full border border-gray-700">
            <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition">
              <Mic className="h-5 w-5" />
            </button>
            <button className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition">
              <Video className="h-5 w-5" />
            </button>
            <button className="p-3 bg-error rounded-full text-white hover:bg-red-600 transition">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Side Panel (Agenda & Intelligence) */}
      <div className="w-full md:w-80 card flex flex-col rounded-lg p-0 overflow-hidden shrink-0">
        <div className="flex border-b border-border">
          <button
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'agenda' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-text-main'}`}
            onClick={() => setActiveTab('agenda')}
          >
            Agenda
          </button>
          <button
            className={`flex-1 py-3 text-sm font-medium ${activeTab === 'participants' ? 'text-primary border-b-2 border-primary' : 'text-text-muted hover:text-text-main'}`}
            onClick={() => setActiveTab('participants')}
          >
            <Users className="h-4 w-4 inline mr-1" /> (4)
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'agenda' && (
            <div className="space-y-4">
              <div className="bg-primary-light/50 p-3 rounded-lg border border-primary/20">
                <div className="text-xs text-primary font-bold uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Target className="h-3 w-3" /> Current Topic
                </div>
                <div className="font-semibold text-text-main">Database Security</div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider">Live Agenda Tracking</h3>

                <div className="flex items-start gap-3 p-2 rounded-md hover:bg-gray-50">
                  <div className="mt-0.5 text-success">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Introduction</div>
                    <div className="text-xs text-text-muted">Covered (5m)</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 bg-gray-50 rounded-md border border-border">
                  <div className="mt-0.5 text-primary">
                    <Target className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Database Security</div>
                    <div className="text-xs text-primary font-medium">Discussing now...</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-md opacity-60">
                  <div className="mt-0.5 text-gray-400">
                    <div className="h-5 w-5 rounded-full border-2 border-gray-400"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">UI Progress</div>
                    <div className="text-xs text-text-muted">Not discussed</div>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-2 rounded-md opacity-60">
                  <div className="mt-0.5 text-gray-400">
                    <div className="h-5 w-5 rounded-full border-2 border-gray-400"></div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Testing Plan</div>
                    <div className="text-xs text-text-muted">Not discussed</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-warning shrink-0 mt-0.5" />
                  <div>
                    <div className="text-sm font-bold text-yellow-800">Important Topic Detected</div>
                    <div className="text-xs text-yellow-700 mt-1">&quot;We need to address the recent authentication vulnerability.&quot;</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'participants' && (
            <div className="space-y-3">
              {['Sindhu (Host)', 'Rahul', 'Priya', 'External Guest'].map((p, i) => (
                <div key={i} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-md">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center font-semibold text-gray-600">
                      {p.charAt(0)}
                    </div>
                    <span className="text-sm font-medium">{p}</span>
                  </div>
                  <Mic className="h-4 w-4 text-gray-400" />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
