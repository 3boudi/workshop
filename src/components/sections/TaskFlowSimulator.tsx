import React, { useState } from 'react';
import { Plus, Trash2, Check, Clock, Database, User, Shield } from 'lucide-react';
import { TaskFlowBackground } from '../background/TaskFlowBackground';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'done';
  priority: 'low' | 'med' | 'high';
}

export const TaskFlowSimulator: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', title: 'Initialize Vite + React project structure', status: 'done', priority: 'high' },
    { id: '2', title: 'Configure Supabase database table & API keys', status: 'done', priority: 'high' },
    { id: '3', title: 'Build responsive UI components in React', status: 'done', priority: 'med' },
    { id: '4', title: 'Implement CRUD operations & real-time sync', status: 'todo', priority: 'high' },
    { id: '5', title: 'Push repository to GitHub & deploy on Netlify', status: 'todo', priority: 'med' },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [dbLog, setDbLog] = useState<string>('Connected to Supabase Postgres (SSL Encrypted). 5 rows loaded.');

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const next = t.status === 'done' ? 'todo' : 'done';
        setDbLog(`UPDATE tasks SET status='${next}' WHERE id='${id}' — OK (200)`);
        return { ...t, status: next };
      }
      return t;
    }));
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(t => t.id !== id));
    setDbLog(`DELETE FROM tasks WHERE id='${id}' — OK (200)`);
  };

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      status: 'todo',
      priority: 'high',
    };
    setTasks(prev => [newTask, ...prev]);
    setDbLog(`INSERT INTO tasks (title, status) VALUES ('${newTask.title}', 'todo') — OK (201)`);
    setNewTaskTitle('');
  };

  return (
    <section id="taskflow" className="relative w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-10 overflow-hidden">
      {/* Decorative Background Layer */}
      <TaskFlowBackground />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-neon/20 border-2 border-forest text-forest-darkest text-xs font-black mb-3">
            <span>Interactive Lab Project · Part 3 (60 min)</span>
          </div>
          <h2 className="font-sans font-black text-3xl sm:text-5xl text-forest-darkest tracking-tight mb-4">
            TaskFlow — <span className="text-neon bg-forest px-3 py-0.5 rounded-lg border-2 border-forest">Mini SaaS</span> Simulator
          </h2>
          <p className="text-muted text-base sm:text-lg max-w-2xl font-semibold">
            Try the exact full-stack application you will build from scratch during the hands-on lab.
          </p>
        </div>

        {/* Main SaaS Simulator Frame */}
        <div className="relative bg-white rounded-3xl border-4 border-forest shadow-brutal-lg overflow-hidden">

          {/* App Topbar */}
          <div className="bg-forest px-6 py-4 border-b-2 border-forest flex flex-wrap items-center justify-between gap-4 text-white">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-neon text-forest-darkest font-mono font-black flex items-center justify-center text-sm border border-forest">
                TF
              </div>
              <div>
                <span className="font-black text-sm tracking-tight text-white block">TaskFlow SaaS</span>
                <span className="text-[10px] text-neon font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-neon animate-pulse" /> Live Supabase Replica
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-bold text-white/80">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-forest-dark border border-neon/30 text-neon">
                <User className="w-3.5 h-3.5" /> student@university.edu
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/10 text-white/70 text-[11px]">
                <Shield className="w-3 h-3 text-neon" /> RLS Enabled
              </span>
            </div>
          </div>

          {/* Simulator Body */}
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left: Task Manager UI */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-black text-xl text-forest-darkest">Your Tasks Dashboard</h3>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-forest-surface border border-forest/20 text-forest">
                    {tasks.filter(t => t.status === 'done').length} of {tasks.length} Done
                  </span>
                </div>

                {/* Task Add Form */}
                <form onSubmit={addTask} className="flex gap-2 mb-6">
                  <input
                    type="text"
                    value={newTaskTitle}
                    onChange={(e) => setNewTaskTitle(e.target.value)}
                    placeholder="Add a new task (e.g. Deploy to Netlify)..."
                    className="flex-1 px-4 py-2.5 rounded-xl border-2 border-forest bg-forest-surface text-forest-darkest text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-neon"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-forest text-neon font-black text-xs sm:text-sm border-2 border-neon hover:bg-forest-mid transition-all shadow-sm flex items-center gap-1 flex-shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Add</span>
                  </button>
                </form>

                {/* Task Items List */}
                <div className="space-y-2.5 mb-6">
                  {tasks.map((task) => (
                    <div
                      key={task.id}
                      className={`flex items-center justify-between p-3.5 rounded-2xl border-2 transition-all ${task.status === 'done'
                          ? 'bg-forest-surface/50 border-muted-border/60 text-muted line-through'
                          : 'bg-white border-forest text-forest-darkest shadow-sm'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => toggleTask(task.id)}
                          className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-all ${task.status === 'done'
                              ? 'bg-neon border-forest text-forest-darkest'
                              : 'bg-white border-forest hover:bg-neon/30'
                            }`}
                        >
                          {task.status === 'done' && <Check className="w-4 h-4 stroke-[3]" />}
                        </button>
                        <span className="text-xs sm:text-sm font-bold">{task.title}</span>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black px-2 py-0.5 rounded-md border ${task.priority === 'high' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-forest-surface text-forest border-forest/20'
                          }`}>
                          {task.priority.toUpperCase()}
                        </span>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-muted hover:text-red-600 p-1 transition-colors"
                          title="Delete task"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Simulated Live Postgres Log */}
              <div className="p-3.5 rounded-xl bg-forest-darkest text-neon font-mono text-[11px] border border-forest flex items-center gap-2">
                <Database className="w-4 h-4 flex-shrink-0 text-white" />
                <span className="truncate">{dbLog}</span>
              </div>
            </div>

            {/* Right: 10-Step Full-Stack Workflow Card */}
            <div className="lg:col-span-5 bg-forest-surface rounded-2xl p-6 border-2 border-forest flex flex-col justify-between">
              <div>
                <span className="text-xs font-black uppercase text-neon-dark tracking-wider block mb-1">
                  Workshop Lab Roadmap
                </span>
                <h4 className="font-black text-xl text-forest-darkest mb-4">
                  The 10-Step Build Process
                </h4>

                <ol className="space-y-2 text-xs font-bold text-forest-darkest">
                  {[
                    '1. Define idea & minimum viable requirements',
                    '2. Initialize React + Tailwind codebase',
                    '3. Scaffold responsive pages & navigation',
                    '4. Design dashboard & interactive cards',
                    '5. Setup Supabase database & SQL schema',
                    '6. Connect API keys securely in .env',
                    '7. Code task CRUD logic (Create, Read, Update, Delete)',
                    '8. Use OpenCode + Claude for code generation',
                    '9. AI-assisted debugging & local testing',
                    '10. Push to GitHub & deploy live on Netlify',
                  ].map((step, idx) => (
                    <li key={idx} className="flex items-center gap-2 p-1.5 rounded-lg bg-white border border-forest/10">
                      <span className="w-4 h-4 rounded-full bg-forest text-neon flex items-center justify-center text-[10px] font-black flex-shrink-0">
                        ✓
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-5 pt-3 border-t border-muted-border/60 text-[11px] font-semibold text-muted text-center">
                Built in Part 3 of the workshop with full live guidance.
              </div>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
};

