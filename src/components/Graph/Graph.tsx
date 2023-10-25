// import { SocialMediaType } from '../../models'
import { StyledChartContainer, StyledLabelDate, StyledTooltipContainer } from './Graph.style'

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
    {
        name: '4',
        newFollowers: 3
    },
    {
        name: '5',
        newFollowers: 2
    },
    {
        name: '6',
        newFollowers: 6
    },
    {
        name: '7',
        newFollowers: 8
    },
    {
        name: '8',
        newFollowers: 9
    },
    {
        name: '9',
        newFollowers: 10
    },
    {
        name: '10',
        newFollowers: 9
    },
    {
        name: '11',
        newFollowers: 10
    },
    {
        name: '12',
        newFollowers: 12
    },
    {
        name: '13',
        newFollowers: 12
    }
]

type tooltipType = {
    stroke: string
    strokeWidth: string
    fill: string
    dataKey: string
    value: number
}

type propsTooltip = {
    active: boolean
    payload: Array<tooltipType>
}

const CustomTooltip = ({ active, payload }: propsTooltip) => {
    if (active && payload && payload.length) {
        return (
            <StyledTooltipContainer $color={payload[0].stroke}>
                <p className="label">{`${payload[0].value} new followers`}</p>
            </StyledTooltipContainer>
        )
    }

    return null
}

const Graph = () => {
    return (
        <StyledChartContainer>
            <StyledLabelDate>May 4 - May 13</StyledLabelDate>
            <ResponsiveContainer
                width="100%"
                height="100%"
            >
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis width={5} />
                    <Tooltip
                        content={
                            <CustomTooltip
                                active={false}
                                payload={[]}
                            />
                        }
                    />
                    <Line
                        type="monotone"
                        dataKey="newFollowers"
                        stroke="#8884d8"
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </StyledChartContainer>
    )
}

export { Graph }
