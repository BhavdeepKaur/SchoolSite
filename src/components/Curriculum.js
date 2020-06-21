import React from 'react';
import './Curriculum.css';
import { Breadcrumb, BreadcrumbItem, Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle,CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';

export default function Curriculum(){
    return(
        <div className = "container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>Curriculum</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h2>Next Gen's Curriculum</h2>
                    <hr />
                </div>                
            </div>
            <div className = "row">
            <div className = "middle">Teaching at Stages is student-centered, project-based, and incorporates the multiple intelligence concepts. While the national curriculum is followed by every student, he or she is also encouraged to develop talents and interests in personal areas of academic interest, and in sport, theater music and dance, for which facilities are outstanding. Homework is given to encourage and develop independent study skills and to complement particular fields of study.
            <hr></hr>
            We aim to give students a broader, deeper, richer educational experience by recognizing 
            each student’s strongest talents and building on them in order to ensure that all the areas 
            of talent are developed. Different individuals have different aptitudes. By using the 
            strongest aptitudes or “intelligence” as a starting point we can educate more effectively by 
            teaching different students the same topic in different ways according to their particular 
            “intelligence”.
            
            </div>
            </div>
            <hr></hr>
            <div className = "row">
                <img src = "./assets/curr2.png" width="1200" height="300" align = "middle"/>
            </div>
            <br></br>
            <hr></hr>
            <div className = "row">
                <div className="dis">
                    <img src="./assets/number-one.png" alt="" width="150" height="150" />
                    <h3 style={{color:"white"}}><b>CLASSES 1-5</b></h3>

                    <p  style={{color:"white"}}>Learning in Classes 1 to 5 is designed to teach the students through a
                        progressive learning experience. It is interactive, social, creative, innovative
                        and learner oriented process. Several concepts in Languages i.e. English
                        and Hindi are incorporated for a good take off. Mathematics, Environmental
                        Studies, Information Technology, General Awareness go hand in hand to
                        form a strong foundation, where the child can spread his wings and soar
                        high. Clubbed with academics is a plethora of activities in terms of skating,
                        martial arts, badminton, cricket, chess, table tennis dance, visual and
                        performing arts. French and Punjabi are the third languages introduced in
                        class-3 to have a local and global footing. The curriculum is designed to
                        ‘epoch making’ of students into global citizens. Stress is laid on working
                        independently and master fluency with words, the art of speaking, writing,
                        reading and listening. The child in honed to perfection which enables
                        smooth transition to the middle level.
                    </p>

                </div>
            </div>

            <hr></hr>
            <div className = "row">
                <div className="dis">
                    <img src="./assets/number-two.png" alt="" width="150" height="150" />
                    <h3 style={{color:"white"}}><b>CLASSES 6-8</b></h3>
                    <p style={{color:"white"}}>
                    The students in Classes 6-8 are prepared for success in life. They are
                    given guidance on better handling of real life situations. Enhanced problem-
                    solving and decision-making skills are imparted to the children. Major
                    enhancement in the three critical skill aspects of thinking, social and
                    emotional is taught to the students. The main focus is towards actualizing
                    of one’s dreams. They are given a clear road map to identify individual
                    challenge areas and are enriched on how to overcome them.  The students
                    are engaged in Interactive Sessions in the classroom with open discussion,
                    sharing of experiences and narrations on personal experiences. Weaving

                    the tapestries of values, patterned on the rich, cultural heritage of our
                    country, drawing inspirations from great lives and events occurring around
                    daily life in the school environment is our constant endeavour.
                    <br></br>>

                    Sports play a vital part in all round development and unwind today’s stress. Students have brought laurels to the school in individual and team games. There is a wide range of sports where in the children can show their
                    interest- Cricket, Basketball, Badminton, Sqay, Chess, Carrom, Table Soccer. The students are sensitized towards social responsibilities and they always stand up for a cause.
                    <br></br>

                    Awareness programmes and Guest Lectures are a regular feature in the school. These help the children to keep abreast with the wisdom of the visiting guests.
                    </p>
                </div>
            </div>

            <hr></hr>
            <div className = "row">
                <div className="dis">
                    <img src="./assets/number-three.png" alt="" width="150" height="150" />
                    <h3 style={{color:"white"}}><b>CLASSES 9-12</b></h3>
                    <p style={{color:"white"}}>
                    The curriculum directions, as prescribed by the Central Board of Secondary Education, New Delhi are followed diligently. Learning becomes more formal with diversification of subjects – Science into Biology, Physics &
                    Chemistry, Mathematics into Algebra,  Geometry & Arithmetic, Social Studies into History, Civics, Geography, and Disaster Management & Economics. Streams at 10+2 level are Commerce, Non-Medical, Medical and Humanities. Smart Class modules, group discussions, interaction,
                    experimentation, project work, power point presentations are the tools used to facilitate the teaching – learning process at senior level.
                    </p>
                </div>
            </div>
        </div>

    )
}