import {
    StyledContainerPage,
    StyledContainerContent,
    StyledHeaderContainer,
    StyledBackgroundPattern
} from './DashboardPage.style'
import { MainTitle } from '../../components/MainTitle/MainTitle'
import { OverviewTitle } from '../../components/OverviewTitle/OverviewTitle'
import { CardsContainer } from '../../components/CardsContainer/CardsContainer'
import { MainCard } from '../../components/MainCard/MainCard'
import { OverviewCard } from '../../components/OverviewCard/OverviewCard'
import { SocialMediaType } from '../../models'
import { DarkModeSwitch } from '../../components/DarkModeSwitch/DarkModeSwitch'


function Dashboard() {
    return (
        <StyledContainerPage>
            <StyledBackgroundPattern />
            <StyledContainerContent>
                <StyledHeaderContainer>
                    <MainTitle
                        title="Social Media Dashboard"
                        followers="23,004"
                    />
                    <DarkModeSwitch></DarkModeSwitch>
                </StyledHeaderContainer>
                <CardsContainer>
                    <MainCard
                        socialMedia={SocialMediaType.facebook}
                        title="1987"
                        label="followers"
                        user="@nathanf"
                        improvement="12 Today"
                        improved={true}
                    />
                    <MainCard
                        socialMedia={SocialMediaType.twitter}
                        title="1044"
                        label="followers"
                        user="@nathanf"
                        improvement="99 Today"
                        improved={true}
                    />
                    <MainCard
                        socialMedia={SocialMediaType.instagram}
                        title="11k"
                        label="followers"
                        user="@realnathanf"
                        improvement="1099 Today"
                        improved={true}
                    />
                    <MainCard
                        socialMedia={SocialMediaType.youtube}
                        title="8239"
                        label="subscribers"
                        user="Nathan F."
                        improvement="144 Today"
                        improved={false}
                    />
                </CardsContainer>

                <OverviewTitle title="Overview -Today"></OverviewTitle>
                <CardsContainer>
                    <OverviewCard
                        socialMedia={SocialMediaType.facebook}
                        label="Page Views"
                        count="87"
                        improvement="3%"
                        improved={true}
                    />
                    <OverviewCard
                        socialMedia={SocialMediaType.facebook}
                        label="Likes"
                        count="52"
                        improvement="2%"
                        improved={false}
                    />

                    <OverviewCard
                        socialMedia={SocialMediaType.instagram}
                        label="Likes"
                        count="5462"
                        improvement="2257%"
                        improved={true}
                    />

                    <OverviewCard
                        socialMedia={SocialMediaType.instagram}
                        label="Profile Views"
                        count="52k"
                        improvement="1375%"
                        improved={true}
                    />

                    <OverviewCard
                        socialMedia={SocialMediaType.twitter}
                        label="Retweets"
                        count="117"
                        improvement="303%"
                        improved={true}
                    />

                    <OverviewCard
                        socialMedia={SocialMediaType.twitter}
                        label="Likes"
                        count="507"
                        improvement="553%"
                        improved={true}
                    />

                    <OverviewCard
                        socialMedia={SocialMediaType.youtube}
                        label="Likes"
                        count="107"
                        improvement="19%"
                        improved={false}
                    />

                    <OverviewCard
                        socialMedia={SocialMediaType.youtube}
                        label="Total Views"
                        count="1407"
                        improvement="12%"
                        improved={false}
                    />
                </CardsContainer>
            </StyledContainerContent>
        </StyledContainerPage>
    )
}

export default Dashboard
