import React from "react";
import { Button, Card, CardBody, CardFooter, CardTitle, Container, Row, Col } from "reactstrap";

function Team() {
  return (

 <div className="section cardbackgroung text-center">
 <Container>
   <h2 className="title teamtitle">Let's talk about us</h2>
   <Row>
     <Col md="3">
       <Card className="card-profile card-plain">
         <div className="card-avatar">
           <img 
            alt="..."
            src={("https://files.slack.com/files-pri/T0351JZQ0-F013ATB4TPF/slack-imgs.com.jpg")}
            />
         </div>
         <CardBody>
             <div className="card-title">
               <CardTitle tag="h4">Abdulaziz Althagafi</CardTitle>
               <h6 className="card-category">Full-Stack Developer</h6>
             </div>
           <p className="card-description text-center">
           Software engineer with computer sciences background, and experience in web development and programming. 
           Offering solving problems using logic. Motivated by effective design of a highly functioning programs.
           </p>
         </CardBody>
         <CardFooter className="text-center">
           <Button
             className="btn-just-icon btn-neutral"
             color="link"
             href="https://git.generalassemb.ly/labdul2ziz/"
           >
            <i className="fa fa-github" />      
           </Button>
           <Button
             className="btn-just-icon btn-neutral ml-1"
             color="link"
             href="www.linkedin.com/in/abdulaziz-al-thagafi"
           >
             <i className="fa fa-linkedin" />
           </Button>
         </CardFooter>
       </Card>
     </Col>
     <Col md="3">
       <Card className="card-profile card-plain">
         <div className="card-avatar">
           <img
            alt="..."
            src={("https://media-exp1.licdn.com/dms/image/C5603AQEj4-ncpVtj4Q/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=o2ri2N-jWELoDw6SZfqjHLLZeb9fDm4T5EVfST4-mZg")}
            />
         </div>
         <CardBody>
             <div className="author">
               <CardTitle tag="h4">Abdulrahman Albediri</CardTitle>
               <h6 className="card-category">Full-Stack Developer</h6>
             </div>
           <p className="card-description text-center">
           A competitive eSports professional gamer turned into a proactive and enthusiastic computer scientist 
           with passion and ambition to ever developing in the field of software engineering.
            
           </p>
         </CardBody>
         <CardFooter className="text-center">
           <Button
             className="btn-just-icon btn-neutral"
             color="link"
             href="https://git.generalassemb.ly/Dhom98"
           >
            <i className="fa fa-github" />      
           </Button>
           <Button
             className="btn-just-icon btn-neutral ml-1"
             color="link"
             href="https://www.linkedin.com/in/abdulrahman-albudayri/"
           >
             <i className="fa fa-linkedin" />
           </Button>
         </CardFooter>
       </Card>
     </Col>
     <Col md="3">
       <Card className="card-profile card-plain">
         <div className="card-avatar">
           
           <img
            alt="..."
            src={("https://files.slack.com/files-pri/T0351JZQ0-F012HPPMNTS/weiss_lou_heedy.png")}
            />
         </div>
         <CardBody>
             <div className="author">
               <CardTitle tag="h4">Bashayr Alhasani</CardTitle>
               <h6 className="card-category">Full-Stack Developer</h6>
             </div>
           <p className="card-description text-center">
           An energetic, and intellectually curious Electrical and Computer Engineering with proven experience in electrical engineering, 
           and web development. Able to develop a mature and responsible approach to any task and achieve it on time and with excellence.
           </p>
         </CardBody>
         <CardFooter className="text-center">
           <Button
             className="btn-just-icon btn-neutral"
             color="link"
             href="https://git.generalassemb.ly/Bashayr-Alhasani"
           >
             <i className="fa fa-github" />
           </Button>
           <Button
             className="btn-just-icon btn-neutral ml-1"
             color="link"
             href="https://www.linkedin.com/in/bashayr-alhasani/"
           >
             <i className="fa fa-linkedin" />
           </Button>
         </CardFooter>
       </Card>
     </Col>
     <Col md="3">
       <Card className="card-profile card-plain">
         <div className="card-avatar">
           <img
            alt="..."
            src={("https://media-exp1.licdn.com/dms/image/C5603AQG7nj6rB89sSg/profile-displayphoto-shrink_200_200/0?e=1594252800&v=beta&t=96lX_yKqdnm_LzrCNyrtM3ststEgJa7J-dBfYN8-9Z8")}
            />
         </div>
         <CardBody>
             <div className="author">
               <CardTitle tag="h4">Najlaa Alahmari</CardTitle>
               <h6 className="card-category">Full-Stack Developer</h6>
             </div>
           <p className="card-description text-center">
           Passionate software engineer with background in information technology, 
           I am motivated through the continuous development of my skills to meet the latest technology advancements. 
           </p>
         </CardBody>
         <CardFooter className="text-center">
           <Button
             className="btn-just-icon btn-neutral"
             color="link"
             href="https://git.generalassemb.ly/n2jlaa"
           >
            <i className="fa fa-github" />      
            </Button>
           <Button
             className="btn-just-icon btn-neutral ml-1"
             color="link"
             href="https://www.linkedin.com/in/najlaaalahmari/"
           >
             <i className="fa fa-linkedin" />
           </Button>
         </CardFooter>
       </Card>
     </Col>
   </Row>
 </Container>
</div>
 );
}

export default Team;