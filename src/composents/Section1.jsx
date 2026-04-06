import fondateur from '../assets/fondateur.jpg'
import mat from '../assets/mat.jpeg'
function Section1() {
    return (
        <div id='cet_nk' className='my-6 md:my-16'>
            <h1 className='text-xl md:text-4xl text-center font-bold'>QUI SOMMMES-NOUS</h1>
            <div className="md:flex justify-around m-6 ">
                {/* affiche mobile */}
                <div className='md:hidden'>
                    <p className='text-xl text-justify'>
                        consectetur tellus id. Arcu vel tempor malesuada vivamus tellus tempus. Nisl sed velit dui magna. Diam scelerisque hac libero et velit tellus quam scelerisque viverra. Suspendisse amet neque auctor ullamcorper venenatis. Natoque sed gravida porta egestas. Egestas euismod in risus ipsum amet euismod. Ut diam fringilla nec consectetur ut vel viverra aliquet. Aliquet enim non ipsum sodales enim a. Odio sagittis ultricies mattis ut blandit augue. Semper diam leo nec lectus tempor velit consequat in.
                    </p>
                </div>
                <div className="max-md:my-6 space-y-2 justify-items-center items-center">
                    <div>
                        <img className='w-80' src={fondateur} alt="" srcset="" />
                        <p className='text-[8px]'>Promoteur de l’ecole en photo</p>
                    </div>
                    <div>
                        <img className='w-80' src={mat} alt="" srcset="" />
                        <p className='text-[8px] '>L’un des bâtiments de l’école</p>
                    </div>
                    <a href="" >
                        Voir le PDF
                    </a>
                    
                    <div class="md:hidden aspect-video justify-items-center mt-4">
                        <iframe
                            class="w-full h-full"
                            src="https://www.youtube.com/embed/Yl_8Z5MINWI"
                            allowfullscreen>
                        </iframe>
                    </div>
                    <p className='text-[8px] md:hidden'>Ceremonie d'ouverture de l’école</p>
                </div>
                {/* affiche desktop/pc */}
                <div className='w-2/3 max-md:hidden '>
                    <p className='text-xl text-justify'>
                        consectetur tellus id. Arcu vel tempor malesuada vivamus tellus tempus. Nisl sed velit dui magna. Diam scelerisque hac libero et velit tellus quam scelerisque viverra. Suspendisse amet neque auctor ullamcorper venenatis. Natoque sed gravida porta egestas. Egestas euismod in risus ipsum amet euismod. Ut diam fringilla nec consectetur ut vel viverra aliquet. Aliquet enim non ipsum sodales enim a. Odio sagittis ultricies mattis ut blandit augue. Semper diam leo nec lectus tempor velit consequat in.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam explicabo impedit unde illo, facere distinctio laboriosam sapiente, voluptate suscipit ratione placeat quis, nihil iure voluptas sunt doloribus fugiat! Optio sequi vel culpa molestiae, architecto modi quam expedita tempora, ipsam accusantium doloremque illo amet aliquam fuga deserunt cum soluta quibusdam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat aperiam explicabo impedit unde illo, facere distinctio laboriosam sapiente, voluptate suscipit ratione placeat quis, nihil iure voluptas sunt doloribus fugiat! Optio sequi vel culpa molestiae, architecto modi quam expedita tempora, ipsam accusantium doloremque illo amet aliquam fuga deserunt cum soluta quibusdam.</p>
                    {/* video de l'ouverture de l'ecole */}
                    <div class="max-md:hidden aspect-video justify-items-center my-4">
                        <iframe
                            class="w-1/2 h-full"
                            src="https://www.youtube.com/embed/Yl_8Z5MINWI"
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Section1
