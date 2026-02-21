export default function Home({ user }) {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Lista de Usuarios
            </h1>

            {/* Contenedor principal con Grid Responsivo */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {user.map((x) => (
                    <div
                        key={x.id}
                        className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="p-6">
                            {/* Encabezado de la tarjeta */}
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-bold text-blue-600 truncate">{x.name}</h2>
                                <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                    @{x.username}
                                </span>
                            </div>

                            {/* Información de contacto */}
                            <div className="space-y-2 text-sm text-gray-600">
                                <p className="flex items-center">
                                    <span className="font-semibold mr-2">📧</span> {x.email}
                                </p>
                                <p className="flex items-center">
                                    <span className="font-semibold mr-2">📞</span> {x.phone}
                                </p>
                            </div>

                            {/* Sección de Dirección */}
                            <div className="mt-6 pt-4 border-t border-gray-100">
                                <h3 className="text-xs font-uppercase tracking-wider text-gray-400 font-bold mb-2 uppercase">
                                    Dirección
                                </h3>
                                <p className="text-sm text-gray-700 leading-relaxed">
                                    {x.address.street}, {x.address.suite}<br />
                                    <span className="font-medium">{x.address.city}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Debugger (opcional, oculto o estilizado) */}
            <details className="mt-12">
                <summary className="cursor-pointer text-gray-500 text-sm hover:text-gray-700">
                    Ver JSON crudo
                </summary>
                {/* <pre className="mt-4 p-4 bg-gray-900 text-green-400 text-xs rounded-lg overflow-auto max-h-60">
                    {JSON.stringify(user, null, 2)}
                </pre> */}
            </details>
        </div>
    );
}