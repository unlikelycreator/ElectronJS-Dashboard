// src/App.jsx
import React, { useState, useEffect } from 'react';
import { Chart } from '@dvsl/react-zoomcharts'; // using generic Chart for all

import '@dvsl/react-zoomcharts/zc.css';

function App() {
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('License in renderer:', !!window.ZoomChartsLicense);
    console.log('LicenseKey length:', window.ZoomChartsLicenseKey?.length || 0);
  }, []);

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-red-50 p-8">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg text-center">
          <h2 className="text-xl font-bold text-red-700 mb-4">Chart Loading Error</h2>
          <p className="text-gray-700">{error}</p>
          <p className="mt-4 text-sm text-gray-500">
            Check DevTools console (Cmd+Option+I) for details.
          </p>
        </div>
      </div>
    );
  }

  const commonSettings = {
    assetsUrlBase: '/', // try 'https://cdn.zoomcharts.com/zoomcharts/latest/' if icons missing
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans flex flex-col">
      {/* Header */}
      <header
        className="h-16 bg-gradient-to-r from-indigo-700 via-indigo-800 to-indigo-900 text-white shadow-lg flex items-center justify-between px-6 lg:px-10 sticky top-0 z-20"
        style={{ WebkitAppRegion: 'drag' }}
      >
        <div className="flex items-center space-x-4 lg:space-x-6">
          <div className="text-2xl lg:text-3xl font-extrabold tracking-tight">Polyset</div>
          <div className="hidden sm:block text-indigo-200 text-sm lg:text-base font-medium">
            Plastic Pvt. Ltd. • ERP Dashboard
          </div>
        </div>

        <div className="flex items-center space-x-6 lg:space-x-8" style={{ WebkitAppRegion: 'no-drag' }}>
          <div className="text-right text-sm lg:text-base">
            <div className="font-semibold">Lalit Bafna</div>
            <div className="text-indigo-200 text-xs lg:text-sm">Admin • Last login: today</div>
          </div>

          <div className="flex space-x-2">
            <button className="w-9 h-9 hover:bg-indigo-600/70 rounded-full flex items-center justify-center transition-colors text-lg font-light">
              −
            </button>
            <button className="w-9 h-9 hover:bg-indigo-600/70 rounded-full flex items-center justify-center transition-colors text-lg font-light">
              □
            </button>
            <button className="w-9 h-9 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors text-lg font-light">
              ×
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800">
            Manufacturing & Sales Dashboard
          </h1>
          <p className="text-slate-500 mt-1 text-sm sm:text-base">
            Financial Year 2025–2026 • Real-time production & sales insights
          </p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-10">
          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 lg:p-6 hover:shadow-xl transition-shadow">
            <p className="text-xs lg:text-sm text-slate-500 font-medium uppercase tracking-wide mb-1">
              Total Revenue (YTD)
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-indigo-700">₹ 8.47 Cr</p>
            <p className="text-xs lg:text-sm text-emerald-600 mt-1.5">+18.4% vs last FY</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 lg:p-6 hover:shadow-xl transition-shadow">
            <p className="text-xs lg:text-sm text-slate-500 font-medium uppercase tracking-wide mb-1">
              Production Output (MTD)
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-indigo-700">1,842 MT</p>
            <p className="text-xs lg:text-sm text-emerald-600 mt-1.5">+9.2% vs last month</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 lg:p-6 hover:shadow-xl transition-shadow">
            <p className="text-xs lg:text-sm text-slate-500 font-medium uppercase tracking-wide mb-1">
              Avg Order Value
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-indigo-700">₹ 45,980</p>
            <p className="text-xs lg:text-sm text-amber-600 mt-1.5">-2.1% vs last month</p>
          </div>

          <div className="bg-white rounded-xl shadow-md border border-slate-200 p-5 lg:p-6 hover:shadow-xl transition-shadow">
            <p className="text-xs lg:text-sm text-slate-500 font-medium uppercase tracking-wide mb-1">
              Pending Orders Value
            </p>
            <p className="text-2xl lg:text-3xl font-bold text-indigo-700">₹ 2.31 Cr</p>
            <p className="text-xs lg:text-sm text-rose-600 mt-1.5">14 overdue orders</p>
          </div>
        </div>

        {/* Charts Grid – now with 3 charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* 1. PieChart – Sales by Product Category */}
          <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800">Sales by Product Category</h2>
              <p className="text-sm text-slate-500 mt-1">Current financial year distribution</p>
            </div>
            <div style={{ height: '380px' }} className="p-4">
              <Chart
                type="PieChart"
                settings={{
                  ...commonSettings,
                  data: [{
                    preloaded: {
                      subvalues: [
                        { id: '1', name: 'Packaging Films', value: 38, color: '#4f46e5' },
                        { id: '2', name: 'Injection Moulded Parts', value: 24, color: '#10b981' },
                        { id: '3', name: 'Blow Moulded Containers', value: 17, color: '#f59e0b' },
                        { id: '4', name: 'Extruded Profiles', value: 12, color: '#ec4899' },
                        { id: '5', name: 'Others', value: 9, color: '#6b7280' },
                      ],
                    },
                  }],
                  legend: { enabled: true, position: 'right' },
                }}
              />
            </div>
          </div>

          {/* 2. FacetChart – Quarterly Revenue vs Target (bar graph) */}
          <div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100">
              <h2 className="text-lg font-semibold text-slate-800">Quarterly Revenue vs Target</h2>
              <p className="text-sm text-slate-500 mt-1">Financial Year 2025–2026 (in Cr ₹)</p>
            </div>
            <div style={{ height: '380px' }} className="p-4">
              <Chart
                type="FacetChart"
                settings={{
                  ...commonSettings,
                  data: [
                    {
                      preloaded: {
                        subvalues: [
                          { id: 'Q1-Actual', name: 'Q1 Actual', value: 18.7, color: '#4f46e5' },
                          { id: 'Q2-Actual', name: 'Q2 Actual', value: 24.1, color: '#4f46e5' },
                          { id: 'Q3-Actual', name: 'Q3 Actual', value: 21.8, color: '#4f46e5' },
                          { id: 'Q4-Actual', name: 'Q4 Actual', value: 27.4, color: '#4f46e5' },
                          { id: 'Target-Avg', name: 'Target Avg', value: 23.0, color: '#9ca3af' },
                        ],
                      },
                    },
                  ],
                  legend: { enabled: true, position: 'top' },
                  toolbar: { enabled: true },
                }}
              />
            </div>
          </div>

          {/* 3. TimeChart – Monthly Revenue Trend (new chart) */}
         {/* Monthly Revenue Trend – using TimeChart with multi-series, smoothing, fill */}
<div className="bg-white rounded-xl shadow border border-slate-200 overflow-hidden lg:col-span-2">
  <div className="px-6 py-4 border-b border-slate-100">
    <h2 className="text-lg font-semibold text-slate-800">Monthly Revenue Trend</h2>
    <p className="text-sm text-slate-500 mt-1">Last 12 months + Forecast (in Cr ₹)</p>
  </div>
  <div style={{ height: '420px' }} className="p-4">
    <Chart
      type="TimeChart"
      settings={{
        ...commonSettings,
        stacks: {
          default: {
            type: "based",
            separateNegativeValues: true
          }
        },
        series: [
          {
            stack: "default",
            name: "Actual Revenue",
            type: "line",
            data: {
              index: 0,
              aggregation: "avg" // or "sum" if your data is cumulative
            },
            style: {
              smoothing: true,
              lineColor: "#4f46e5",
              fillColor: "#4f46e5",
              fillOpacity: 0.25
            }
          },
          {
            stack: "default",
            name: "Target",
            type: "line",
            data: {
              index: 1,
              aggregation: "avg"
            },
            style: {
              smoothing: true,
              lineColor: "#9ca3af",
              lineStyle: "dashed",
              fillColor: "#9ca3af",
              fillOpacity: 0.1
            }
          },
          {
            stack: "default",
            name: "Forecast",
            type: "line",
            data: {
              index: 2,
              aggregation: "avg"
            },
            style: {
              smoothing: true,
              lineColor: "#f59e0b",
              lineStyle: "dotted",
              fillColor: "#f59e0b",
              fillOpacity: 0.15
            }
          }
        ],
        data: [{
          preloaded: {
            values: [
              // [date, actual, target, forecast]
              ["2025-03-01", 4.2, 4.0, 4.1],
              ["2025-04-01", 5.1, 5.0, 5.2],
              ["2025-05-01", 4.8, 5.2, 5.5],
              ["2025-06-01", 6.3, 6.0, 6.4],
              ["2025-07-01", 7.1, 6.8, 7.3],
              ["2025-08-01", 8.4, 8.0, 8.6],
              ["2025-09-01", 7.9, 8.5, 9.0],
              ["2025-10-01", 9.2, 9.0, 9.8],
              ["2025-11-01", 8.7, 9.5, 10.2],
              ["2025-12-01", 10.1, 10.0, 10.8],
              ["2026-01-01", 11.3, 11.0, 12.0],
              ["2026-02-01", 12.8, 12.0, 13.5]
            ],
            from: "2025-03-01",
            to: "2026-02-01",
            unit: "month"
          }
        }],
        legend: { enabled: true, position: 'top' },
        toolbar: { enabled: true },
        yAxis: {
          title: { text: 'Revenue (Cr ₹)' },
          min: 0,
          max: 15
        },
        xAxis: {
          title: { text: 'Month' }
        }
      }}
    />
  </div>
</div>
        </div>

        {/* Footer */}
        <footer className="mt-12 lg:mt-16 text-center text-sm text-slate-500 py-6 border-t border-slate-200">
          Polyset Plastic Pvt. Ltd. • ERP System • © 2026 • Internal Use Only
          <br />
          Last refresh: {new Date().toLocaleString()}
        </footer>
      </main>
    </div>
  );
}

export default App;