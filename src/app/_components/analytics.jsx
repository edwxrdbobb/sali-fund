import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Analytics = () => {
    const childPovertyData = [
        { name: 'Children affected by poverty', value: 70 },
        { name: 'Children with social protection', value: 10 },
    ];

    const mortalityRateData = [
        { name: 'Deaths before 5th birthday', value: 10 },
        { name: 'Survival rate', value: 90 },
    ];

    const healthIndicatorsData = [
        { name: 'Under-five mortality', value: 105 },
        { name: 'Infant mortality', value: 76 },
        { name: 'Neonatal mortality', value: 31 },
    ];

    const COLORS = {
        green: '#22c55e',  // A darker green
        purple: '#a855f7', // A darker purple
        yellow: '#eab308'  // A darker yellow
    };

    return (
        <div className="w-full overflow-x-clip flex flex-col justify-end py-8 bg-gray-100 space-y-8">
            <div className="analysis-container w-fit mx-auto grid grid-cols-2 gap-8">
                <div className="analysis-tile-container flex flex-col items-center space-y-4 bg-green-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-800">Child Poverty and Social Protection</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={childPovertyData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {childPovertyData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS.purple} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="analysis-tile-container flex flex-col items-center space-y-4 bg-purple-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-purple-800">Under-Five Mortality Rate</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={mortalityRateData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {mortalityRateData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS.green} />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="analysis-container w-fit mx-auto">
                <div className="analysis-tile-container flex flex-col items-center space-y-4 bg-yellow-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-800">Child Health Indicators (per 1,000 live births)</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={healthIndicatorsData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill={COLORS.yellow} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Analytics;