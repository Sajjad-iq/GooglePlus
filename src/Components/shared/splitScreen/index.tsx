import { ReactNode, useContext } from 'react'
import { GlobalContext } from '../../../Context/GlobalContext'
import { Footer } from './footer'
import { Header } from './Header'
import { LeftSide } from './LeftSide'
import { RightSide } from './RightSide'
import { Row } from './Row'
import { SplitWrapper } from './SplitWrapper'

interface ChildrenType {
    header: ReactNode
    left: ReactNode,
    right: ReactNode,
    footer: ReactNode
}


export const SplitScreen = (children: ChildrenType) => {

    const { IsUserSignIn } = useContext(GlobalContext)

    return (
        <SplitWrapper style={{ display: IsUserSignIn ? "flex" : "none" }}>

            <Header>
                {children.header}
            </Header>

            <Row>
                <LeftSide>
                    {children.left}
                </LeftSide>

                <RightSide>
                    {children.right}
                </RightSide>
            </Row>

            <Footer>
                {children.footer}
            </Footer>
        </SplitWrapper>
    )
}
