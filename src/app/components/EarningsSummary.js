"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export default function EarningsSummary() {
  const monthlyData = [
    { name: "Jan", earnings: 4500 },
    { name: "Feb", earnings: 5200 },
    { name: "Mar", earnings: 4800 },
    { name: "Apr", earnings: 6000 },
    { name: "May", earnings: 5700 },
    { name: "Jun", earnings: 6500 },
    { name: "Jul", earnings: 7200 },
    { name: "Aug", earnings: 6800 },
    { name: "Sep", earnings: 7500 },
    { name: "Oct", earnings: 8200 },
    { name: "Nov", earnings: 7800 },
    { name: "Dec", earnings: 8500 },
  ]

  const yearlyData = [
    { name: "2019", earnings: 45000 },
    { name: "2020", earnings: 58000 },
    { name: "2021", earnings: 72000 },
    { name: "2022", earnings: 85000 },
    { name: "2023", earnings: 96000 },
  ]

  const stats = [
    { title: "Total Earnings", value: "$320,500" },
    { title: "Avg. Monthly", value: "$6,750" },
    { title: "Current Year", value: "$96,000" },
    { title: "Projects Billed", value: "120" },
  ]

  return (
    <section id="earnings" className="py-12">
      <div className="space-y-4 mb-8">
        <h2 className="text-3xl font-bold text-blue-600">Earnings Summary</h2>
        <p className="text-slate-300">Financial overview of my freelance work</p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index} className="bg-slate-900 border-blue-900/20">
            <CardContent className="p-6">
              <p className="text-sm text-slate-400">{stat.title}</p>
              <p className="text-2xl font-bold text-blue-500 mt-1">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8 bg-slate-900 border-blue-900/20">
        <CardHeader>
          <CardTitle className="text-white">Earnings Over Time</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="monthly">
            <TabsList className="mb-4 bg-slate-800">
              <TabsTrigger value="monthly" className="data-[state=active]:bg-blue-600">
                Monthly
              </TabsTrigger>
              <TabsTrigger value="yearly" className="data-[state=active]:bg-blue-600">
                Yearly
              </TabsTrigger>
            </TabsList>
            <TabsContent value="monthly" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1F2937", border: "none", borderRadius: "4px", color: "#F9FAFB" }}
                    itemStyle={{ color: "#F9FAFB" }}
                    formatter={(value) => [`$${value}`, "Earnings"]}
                  />
                  <Bar dataKey="earnings" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
            <TabsContent value="yearly" className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={yearlyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="name" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1F2937", border: "none", borderRadius: "4px", color: "#F9FAFB" }}
                    itemStyle={{ color: "#F9FAFB" }}
                    formatter={(value) => [`$${value}`, "Earnings"]}
                  />
                  <Bar dataKey="earnings" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </section>
  )
}
