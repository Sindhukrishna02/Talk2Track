import Link from "next/link";
import { Clock, Plus, Video, Bot, Target, AlertCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-main">Good afternoon, Sindhu</h1>
          <p className="text-text-muted mt-1">Plan, manage and follow up your meetings intelligently.</p>
        </div>
        <Link href="/meetings/create" className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto">
          <Plus className="h-5 w-5" />
          Create Meeting
        </Link>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column (2/3) */}
        <div className="md:col-span-2 space-y-6">
          {/* AI Intelligence Overview */}
          <div className="card bg-gradient-to-br from-primary-light/30 to-white">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="h-6 w-6 text-primary" />
              <h2 className="text-lg font-semibold">AI Meeting Intelligence</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 bg-white rounded-lg border border-border">
                <div className="text-sm text-text-muted mb-1">Meeting efficiency</div>
                <div className="text-2xl font-bold text-success">86%</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-border">
                <div className="text-sm text-text-muted mb-1">Agenda coverage</div>
                <div className="text-2xl font-bold text-primary">82%</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-border">
                <div className="text-sm text-text-muted mb-1">Tasks completed</div>
                <div className="text-2xl font-bold text-text-main">74%</div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-border">
                <div className="text-sm text-text-muted mb-1">Follow-ups req.</div>
                <div className="text-2xl font-bold text-warning">3</div>
              </div>
            </div>
          </div>

          {/* Today's Meetings */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Today&apos;s Meetings</h2>
            <div className="space-y-4">
              {[
                { time: "2:00 PM", title: "Project Phoenix Sync", type: "Online", status: "Upcoming", duration: "45m" },
                { time: "4:30 PM", title: "Design Review", type: "Conf Room B", status: "Upcoming", duration: "1h" },
              ].map((meeting, i) => (
                <div key={i} className="flex items-start p-3 hover:bg-gray-50 rounded-lg transition-colors border border-border/50">
                  <div className="w-20 text-sm font-medium text-text-main mt-1">{meeting.time}</div>
                  <div className="flex-1 ml-4 border-l-2 border-primary pl-4">
                    <div className="font-semibold text-text-main">{meeting.title}</div>
                    <div className="text-sm text-text-muted flex items-center gap-4 mt-1">
                      <span className="flex items-center gap-1"><Video className="h-4 w-4" /> {meeting.type}</span>
                      <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {meeting.duration}</span>
                    </div>
                  </div>
                  <div className="px-3 py-1 bg-primary-light text-primary text-xs font-medium rounded-full">
                    {meeting.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upcoming Meetings */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Upcoming Meetings</h2>
            <div className="text-center py-8 text-text-muted border-2 border-dashed border-border rounded-lg">
              No other meetings scheduled for this week.
            </div>
          </div>
        </div>

        {/* Right Column (1/3) */}
        <div className="space-y-6">
          {/* Readiness Score */}
          <div className="card">
            <h2 className="text-lg font-semibold mb-4">Meeting Readiness</h2>
            <div className="flex items-center justify-center mb-4">
              <div className="h-24 w-24 rounded-full border-4 border-primary flex items-center justify-center text-xl font-bold">
                91%
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Target className="h-5 w-5 text-success shrink-0" />
                <span>Room available for Project Phoenix Sync</span>
              </li>
              <li className="flex items-start gap-2">
                <Target className="h-5 w-5 text-success shrink-0" />
                <span>Agenda prepared for Design Review</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="h-5 w-5 text-warning shrink-0" />
                <span>2 participants not confirmed for Design Review</span>
              </li>
            </ul>
          </div>

          {/* My Tasks */}
          <div className="card">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">My Tasks</h2>
              <Link href="/tasks" className="text-sm text-primary hover:underline">View All</Link>
            </div>
            <div className="space-y-3">
              {[
                { task: "Prepare database schema", due: "Tomorrow", priority: "High" },
                { task: "Review PR #42", due: "Today", priority: "Medium" },
                { task: "Update Q3 roadmap", due: "Friday", priority: "Low" },
              ].map((t, i) => (
                <div key={i} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-md">
                  <input type="checkbox" className="mt-1 rounded text-primary focus:ring-primary" />
                  <div>
                    <div className="text-sm font-medium">{t.task}</div>
                    <div className="text-xs text-text-muted flex items-center gap-2 mt-1">
                      <span className={t.due === "Today" || t.due === "Tomorrow" ? "text-error" : ""}>Due {t.due}</span>
                      <span className={`px-1.5 py-0.5 rounded text-[10px] ${
                        t.priority === 'High' ? 'bg-red-100 text-red-700' :
                        t.priority === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-gray-100 text-gray-700'
                      }`}>{t.priority}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
