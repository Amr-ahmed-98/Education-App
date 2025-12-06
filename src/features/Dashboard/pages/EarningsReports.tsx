import React from 'react';
import { useTranslation } from 'react-i18next';
import CountUp from 'react-countup';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import { Download } from 'lucide-react';
import { earningsCards, payoutHistory, last6MonthsEarnings } from '../../../utils/Data';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const EarningsReports: React.FC = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  // Chart configuration
  const chartData = {
    labels: last6MonthsEarnings.map(item => item.month),
    datasets: [
      {
        label: t('earningsReports.earningsOverview'),
        data: last6MonthsEarnings.map(item => item.amount),
        backgroundColor: '#3972ff',
        borderRadius: 8,
        barThickness: 40,
      }
    ]
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 13
        },
        callbacks: {
          label: (context: any) => `$${context.parsed.y.toFixed(2)}`
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#9ca3af'
        }
      },
      y: {
        grid: {
          color: 'rgba(156, 163, 175, 0.1)'
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#9ca3af',
          callback: (value: any) => `$${value}`
        },
        beginAtZero: true
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid':
        return 'text-green-600 bg-green-100 dark:bg-green-900/30';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/30';
      case 'processing':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900/30';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900/30';
    }
  };

  return (
    <div className="min-h-screen bg-light-secondary dark:bg-dark-primary transition-colors duration-300 p-4 md:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-dark-primary dark:text-light-primary mb-2">
              {t('earningsReports.title')}
            </h1>
            <p className="text-text-grayDark dark:text-text-grayLight text-sm md:text-base">
              {t('earningsReports.subtitle')}
            </p>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg flex items-center gap-2 transition-colors duration-200 w-full md:w-auto justify-center">
            <Download size={20} />
            <span className="font-medium">{t('earningsReports.downloadStatement')}</span>
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {earningsCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white dark:bg-dark-secondary rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-transparent dark:border-gray-800"
              >
                <div className="flex items-center gap-4">
                  <div className={`${card.iconBg} p-3 md:p-4 rounded-xl md:rounded-2xl`}>
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-text-grayDark dark:text-text-grayLight text-xs md:text-sm mb-1">
                      {t(card.labelKey)}
                    </p>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-dark-primary dark:text-light-primary">
                      $<CountUp
                        end={card.amount}
                        duration={2}
                        decimals={2}
                        decimal="."
                        separator=","
                      />
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Earnings Overview Chart */}
        <div className="bg-white dark:bg-dark-secondary rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-sm border border-transparent dark:border-gray-800 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
            <h2 className="text-xl md:text-2xl font-bold text-dark-primary dark:text-light-primary">
              {t('earningsReports.earningsOverview')}
            </h2>
            <span className="text-sm text-text-grayDark dark:text-text-grayLight">
              {t('earningsReports.last6Months')}
            </span>
          </div>
          <div className="h-64 md:h-80 lg:h-96">
            <Bar data={chartData} options={chartOptions} />
          </div>
        </div>

        {/* Payout History */}
        <div className="bg-white dark:bg-dark-secondary rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-sm border border-transparent dark:border-gray-800">
          <h2 className="text-xl md:text-2xl font-bold text-dark-primary dark:text-light-primary mb-6">
            {t('earningsReports.payoutHistory')}
          </h2>
          
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className={`text-${isRTL ? 'right' : 'left'} pb-4 text-sm font-semibold text-text-grayDark dark:text-text-grayLight`}>
                    {t('earningsReports.date')}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} pb-4 text-sm font-semibold text-text-grayDark dark:text-text-grayLight`}>
                    {t('earningsReports.transactionId')}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} pb-4 text-sm font-semibold text-text-grayDark dark:text-text-grayLight`}>
                    {t('earningsReports.amount')}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} pb-4 text-sm font-semibold text-text-grayDark dark:text-text-grayLight`}>
                    {t('earningsReports.status')}
                  </th>
                  <th className={`text-${isRTL ? 'right' : 'left'} pb-4 text-sm font-semibold text-text-grayDark dark:text-text-grayLight`}>
                    {t('earningsReports.invoice')}
                  </th>
                </tr>
              </thead>
              <tbody>
                {payoutHistory.map((payout) => (
                  <tr
                    key={payout.id}
                    className="border-b border-gray-200 dark:border-gray-700 last:border-0 hover:bg-gray-50 dark:hover:bg-dark-primary/50 transition-colors"
                  >
                    <td className="py-4 text-dark-primary dark:text-light-primary font-medium">
                      {payout.date}
                    </td>
                    <td className="py-4 text-text-grayDark dark:text-text-grayLight">
                      {payout.transactionId}
                    </td>
                    <td className="py-4 text-dark-primary dark:text-light-primary font-semibold">
                      ${payout.amount.toFixed(2)}
                    </td>
                    <td className="py-4">
                      <span className={`${getStatusColor(payout.status)} px-3 py-1 rounded-full text-xs font-medium inline-block`}>
                        {t(`earningsReports.${payout.status}`)}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="text-text-grayDark dark:text-text-grayLight hover:text-primary dark:hover:text-primary transition-colors">
                        <Download size={20} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {payoutHistory.map((payout) => (
              <div
                key={payout.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow"
              >
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <p className="text-sm text-text-grayDark dark:text-text-grayLight mb-1">
                      {t('earningsReports.date')}
                    </p>
                    <p className="text-dark-primary dark:text-light-primary font-medium">
                      {payout.date}
                    </p>
                  </div>
                  <span className={`${getStatusColor(payout.status)} px-3 py-1 rounded-full text-xs font-medium`}>
                    {t(`earningsReports.${payout.status}`)}
                  </span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-grayDark dark:text-text-grayLight">
                      {t('earningsReports.transactionId')}:
                    </span>
                    <span className="text-dark-primary dark:text-light-primary">
                      {payout.transactionId}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-text-grayDark dark:text-text-grayLight">
                      {t('earningsReports.amount')}:
                    </span>
                    <span className="text-dark-primary dark:text-light-primary font-bold text-base">
                      ${payout.amount.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-gray-200 dark:border-gray-700">
                    <span className="text-text-grayDark dark:text-text-grayLight">
                      {t('earningsReports.invoice')}:
                    </span>
                    <button className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                      <Download size={16} />
                      <span className="text-sm">Download</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsReports;
