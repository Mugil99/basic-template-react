import image1 from '../image/image1.jpg'

const About=()=>{
    return(
        <div className="about">
          <img src={image1} style={{height:"300px",border:"2px solid black"}}/>
          <h2 style={{textAlign:"center"}}>About</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto ipsam voluptate soluta sunt suscipit officiis illo at autem sint eos vero provident impedit sequi, deserunt beatae, a eaque dicta ut? Quae sed totam, accusamus facere nemo exercitationem placeat facilis nesciunt ullam animi ipsa quos itaque, perspiciatis quo id quibusdam incidunt debitis qui error tempora soluta alias eius aliquid? Deserunt saepe sequi quos necessitatibus id expedita provident itaque dolore velit pariatur! Minima, ratione. Commodi voluptates delectus aspernatur, doloribus rem sequi nostrum adipisci laudantium maiores repudiandae reiciendis voluptatem cupiditate earum dolores quis laboriosam accusantium nihil consequuntur? Nam ducimus iure aut assumenda.</p>
        <hr></hr>
        </div>
    )
}
export default About;