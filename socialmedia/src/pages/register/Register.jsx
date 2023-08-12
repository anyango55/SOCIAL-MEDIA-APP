import { Link } from 'react-router-dom';
import './register.scss'

function Register() {
  return (
    <div className='register'>
        <div className='card'>
            <div className='left'>
                <h1>Cynthia Social</h1>
                <p> Lorem ipsum dolor, sit amet consectetur 
                    adipisicing elit. Perspiciatis assumenda, 
                    corporis blanditiis exercitationem explicabo 
                    officiis officia modi similique nulla? Odit ut
                    mollitia corrupti est id eaque vitae quibusdam accusantium earum.
                </p>
                <span>Have an account?</span>
                <Link to="/login">
                <button>Login</button>
                </Link>
                
            </div>

            <div className='right'>
                <h1>Register</h1>
                <form>
                    <input type='text' placeholder='username' />
                    <input type='password' placeholder='password'/>
                    <input type='text' placeholder='username' />
                    <input type='password' placeholder='password'/>
                    <button>Register</button>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Register;


// import './login.scss'

// function login() {
//   return (
//     <div className='login'>
//         <div className='card'>
//             <div className='left'>
//                 <h1>Hello World</h1>
//                 <p> Lorem ipsum dolor sit amet consectetur 
//                     adipisicing elit. Optio pariatur obcaecati cumque fugit 
//                     voluptate fuga dignissimos nihil eos voluptatum? Similique
//                     repellendus alias a illum eum magnam soluta esse aperiam. Minima!</p>
//                 <span>Dont Have an account?</span>
//                 <button>Register</button>
//             </div>

//             <div className='right'></div>

//         </div>

//     </div>
//   )
// }

// export default login