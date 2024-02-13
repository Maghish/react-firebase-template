import Heading from "../components/Heading"
import SubHeading from "../components/SubHeading"

function Home() {
    return (
        <>
            <Heading heading="Home" />
            <SubHeading subHeading="Contact" linkTo="/contact" />   
            <SubHeading subHeading="Docs" linkTo="/docs" />   
        </>
    )
}

export default Home