"use client";

import { ChevronLeft, ChevronRight, Clock, Video } from "lucide-react";

export default function Calendar() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text-main">Calendar</h1>
          <p className="text-text-muted mt-1">Manage your schedule and meeting conflicts.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn-secondary px-3 py-1.5"><ChevronLeft className="h-4 w-4" /></button>
          <span className="font-medium text-text-main min-w-[120px] text-center">October 2023</span>
          <button className="btn-secondary px-3 py-1.5"><ChevronRight className="h-4 w-4" /></button>
        </div>
        <div className="flex bg-gray-100 p-1 rounded-lg">
          <button className="px-4 py-1 text-sm font-medium rounded-md text-text-muted">Month</button>
          <button className="px-4 py-1 text-sm font-medium rounded-md bg-white shadow-sm text-text-main">Week</button>
          <button className="px-4 py-1 text-sm font-medium rounded-md text-text-muted">Day</button>
        </div>
      </div>

      <div className="card overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Calendar Header (Days) */}
          <div className="grid grid-cols-8 border-b border-border">
            <div className="p-3 w-16"></div>
            {['Mon 16', 'Tue 17', 'Wed 18', 'Thu 19', 'Fri 20', 'Sat 21', 'Sun 22'].map((day, i) => (
              <div key={i} className="p-3 text-center border-l border-border">
                <div className={`text-sm font-medium ${i === 1 ? 'text-primary' : 'text-text-main'}`}>{day.split(' ')[0]}</div>
                <div className={`text-xl font-bold mt-1 ${i === 1 ? 'text-primary' : 'text-text-main'}`}>{day.split(' ')[1]}</div>
              </div>
            ))}
          </div>

          {/* Calendar Body (Hours & Events) */}
          <div className="relative">
            {[9, 10, 11, 12, 1, 2, 3, 4, 5].map((hour, i) => (
              <div key={i} className="grid grid-cols-8 border-b border-border/50 h-20">
                <div className="p-2 text-xs text-text-muted text-right w-16">{hour}:00 {hour < 6 ? 'PM' : 'AM'}</div>
                {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                  <div key={day} className="border-l border-border/50 relative p-1">
                    {/* Mock Event 1 */}
                    {day === 1 && hour === 2 && (
                      <div className="absolute top-1 left-1 right-1 h-[90%] bg-primary-light border border-primary/20 rounded p-2 overflow-hidden shadow-sm">
                        <div className="text-xs font-bold text-primary truncate">Project Phoenix Sync</div>
                        <div className="text-[10px] text-primary/80 flex items-center gap-1 mt-1 truncate">
                          <Video className="h-3 w-3" /> Online
                        </div>
                      </div>
                    )}
                    {/* Mock Event 2 */}
                    {day === 1 && hour === 4 && (
                      <div className="absolute top-[50%] left-1 right-1 h-[90%] bg-gray-100 border border-gray-300 rounded p-2 overflow-hidden shadow-sm">
                        <div className="text-xs font-bold text-gray-700 truncate">Design Review</div>
                        <div className="text-[10px] text-gray-500 flex items-center gap-1 mt-1 truncate">
                          <Clock className="h-3 w-3" /> Conf Rm B
                        </div>
                      </div>
                    )}
                    {/* Conflict Mock Event */}
                    {day === 2 && hour === 11 && (
                      <div className="absolute top-1 left-1 right-1 h-[90%] bg-red-50 border border-red-200 rounded p-2 overflow-hidden shadow-sm">
                        <div className="text-xs font-bold text-red-700 truncate">Client Call</div>
                        <div className="text-[10px] text-red-600 mt-1 truncate font-medium">
                          ⚠ Conflict detected
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}

            {/* Current Time Line */}
            <div className="absolute top-[180px] left-16 right-0 h-px bg-error z-10 flex items-center">
              <div className="w-2 h-2 rounded-full bg-error -ml-1"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
