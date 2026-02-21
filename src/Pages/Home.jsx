import { User, Mail, Phone, MapPin, ExternalLink, Hash } from 'lucide-react';

export default function Home({ user }) {
    return (
        <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h1 className="text-4xl font-black text-slate-900 tracking-tight">
                            Directorio de Usuarios
                        </h1>
                        <p className="text-slate-500 mt-2 flex items-center gap-2">
                            <User size={18} className="text-indigo-500" />
                            {user.length} usuarios registrados en la base de datos
                        </p>
                    </div>
                </div>

                {/* Grid de Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {user.map((x) => (
                        <div
                            key={x.id}
                            className="group bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 flex flex-col"
                        >
                            {/* Header de la Card */}
                            <div className="p-6 pb-4">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
                                        <User size={24} strokeWidth={2.5} />
                                    </div>
                                    <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-500 px-2 py-1 rounded-md">
                                        <Hash size={10} />
                                        ID-{x.id}
                                    </div>
                                </div>

                                <h2 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-indigo-600 transition-colors">
                                    {x.name}
                                </h2>
                                <p className="text-indigo-500 text-sm font-medium mt-1">@{x.username}</p>
                            </div>

                            {/* Cuerpo de la Card */}
                            <div className="px-6 py-4 space-y-4 flex-grow border-t border-slate-50">
                                <div className="flex items-center gap-3 text-slate-600">
                                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-indigo-50 transition-colors">
                                        <Mail size={16} className="text-slate-500 group-hover:text-indigo-500" />
                                    </div>
                                    <span className="text-sm truncate font-medium">{x.email}</span>
                                </div>

                                <div className="flex items-center gap-3 text-slate-600">
                                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-indigo-50 transition-colors">
                                        <Phone size={16} className="text-slate-500 group-hover:text-indigo-500" />
                                    </div>
                                    <span className="text-sm font-medium">{x.phone}</span>
                                </div>

                                <div className="flex items-start gap-3 text-slate-600">
                                    <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-indigo-50 transition-colors mt-1">
                                        <MapPin size={16} className="text-slate-500 group-hover:text-indigo-500" />
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-bold text-slate-700">Ubicación</p>
                                        <p className="text-slate-500">{x.address.street}, {x.address.suite}</p>
                                        <p className="text-slate-400 italic">{x.address.city}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Footer de la Card con Botón */}
                            <div className="p-4 border-t border-slate-50 bg-slate-50/50 rounded-b-2xl">
                                <button className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all duration-200 shadow-sm text-sm">
                                    <span>Detalles</span>
                                    <ExternalLink size={14} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Debugger discreto */}
            <footer className="mt-16 text-center">
                <p className="text-xs text-slate-400 font-mono">MODO DESARROLLADOR: {user.length} OBJETOS CARGADOS</p>
            </footer>
        </div>
    );
}