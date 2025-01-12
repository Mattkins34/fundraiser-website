interface ProgressBarProps {
  current: number;
  goal: number;
}

export default function ProgressBar({ current, goal }: ProgressBarProps) {
  const percentage = Math.min((current / goal) * 100, 100);
  
  const formatAmount = (amount: number) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`;
    }
    return `$${amount.toLocaleString()}`;
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Fundraising Progress</h2>
        <div className="bg-gray-300 h-8 rounded-full">
          <div
            className="bg-primary h-8 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>{formatAmount(current)} Raised</span>
          <span>{formatAmount(goal)} Goal</span>
        </div>
      </div>
    </div>
  )
