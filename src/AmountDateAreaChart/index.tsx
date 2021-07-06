import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import styled from "styled-components";
import { get } from "lodash";
import { format, fromUnixTime } from "date-fns";

interface DataType {
  name: string;
  timestamp: number;
  amount: number;
}

export default function AmountDateAreaChart() {
  // const formatAmount = (amount: number) => `S${amount}`;
  const data: Array<DataType> = [
    {
      name: "Transaction A",
      timestamp: 1617788629,
      amount: 2400,
    },
    {
      name: "Transaction B",
      timestamp: 1617875029,
      amount: 1398,
    },
    {
      name: "Transaction C",
      timestamp: 1617961429,
      amount: 9800,
    },
    {
      name: "Transaction D",
      timestamp: 1618047829,
      amount: 3908,
    },
    {
      name: "Transaction E",
      timestamp: 1618134229,
      amount: 4800,
    },
    {
      name: "Transaction F",
      timestamp: 1618220629,
      amount: 3800,
    },
    {
      name: "Transaction G",
      timestamp: 1618307035,
      amount: 4300,
    },
  ];

  return (
    <StyledAmountDateAreaChart>
      <div>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#30E7A9" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#30E7A9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="timestamp"
            tickFormatter={(label: number) => {
              const t = fromUnixTime(label);
              return format(t, "d LLL");
            }}
          />
          <YAxis
            tickFormatter={(label: number) => {
              return `S$${label}`;
            }}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Area
            type="monotone"
            dataKey="amount"
            stroke="#30E7A9"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorAmount)"
          />
        </AreaChart>
      </div>
    </StyledAmountDateAreaChart>
  );
}

function CustomTooltip(props: TooltipProps<number, string>) {
  const { payload } = props;
  const name = get(payload, "0.payload.name", "");
  return (
    <StyledCustomTooltip>
      <span>{name}</span>
    </StyledCustomTooltip>
  );
}

const StyledAmountDateAreaChart = styled.div`
  background: white;
  padding: 40px;
  overflow: visible;
`;

const StyledCustomTooltip = styled.div`
  padding: 20px;
  border: 1px solid black;
  background: white;
  border-radius: 8px;
`;
