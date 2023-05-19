// import { Button, Col, Form, Row } from 'react-bootstrap';
// import './EditPerson.css';
// import React, { useEffect, useState } from 'react';
// import NavBar from '../nav-bar/Nav';
// import { UserService } from '../../service/UserService';

// function EditPerson() {

//   const actualUser = UserService.showOneByName(localStorage.getItem('user'));

//   const [user, setUser] = useState({
//     "name": localStorage.getItem("user"),
//     "password": ""
//   });

//   const [selectedUserId, setSelectedUserId] = useState(null);

//   useEffect(() => {
//     if (selectedUserId) {
//       UserService.showOne(selectedUserId)
//         .then((response) => {
//           setUser(response.data);
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     }
//   }, [selectedUserId]);

//   const editUser = (event) => {
//     setUser({ ...user, [event.target.name]: event.target.value })
//   }

//   function register(event) {
//     event.preventDefault();
//     let name = document.getElementById("name").value;
//     let pass = document.getElementById("password").value;
//     let verPas = document.getElementById("verifyPassword").value;
//     let acPas = document.getElementById("actualPassword").value;

//     if (document.getElementById("name").classList.contains("wrongAnswer")) {
//       document.getElementById("name").classList.remove("wrongAnswer");
//     }
//     if (document.getElementById("password").classList.contains("wrongAnswer")) {
//       document.getElementById("password").classList.remove("wrongAnswer");
//     }
//     if (document.getElementById("verifyPassword").classList.contains("wrongAnswer")) {
//       document.getElementById("verifyPassword").classList.remove("wrongAnswer");
//     }
//     if (document.getElementById("actualPassword").classList.contains("wrongAnswer")) {
//       document.getElementById("actualPassword").classList.remove("wrongAnswer");
//     }

//     if (name != '' && pass != '' && verPas != '' && acPas != '') {
//       if (pass == verPas) {
//         UserService.showOneByName(name).then((resultName) => {
//           if (resultName) {
//             UserService.showOne(resultName.data.id).then((resultId) => {
//               if (resultId.data.name == resultName.data.name) {
//                 if (resultId.data.password == acPas) {
//                   console.log(user)
//                   UserService.edit(user, user.id)
//                     .then(() => {
//                       window.location.reload();
//                     })
//                     .catch((error) => {
//                       console.error("Erro na criação do usuário:", error);
//                     });
//                 } else {
//                   alert("Senha incorreta!")
//                   document.getElementById("actualPassword").classList.add("wrongAnswer");
//                 }
//               } else {
//                 alert("Esse nome já existe!");
//                 document.getElementById("name").classList.add("wrongAnswer");
//               }
//             })
//           } else {
//             actualUser.then((resultName) => {
//               if (resultName.data.password == acPas) {
//                 UserService.edit(user, user.id)
//                   .then(() => {
//                     window.location.reload();
//                   })
//                   .catch((error) => {
//                     console.error("Erro na criação do usuário:", error);
//                   });
//               } else {
//                 alert("Senha incorreta!")
//                 document.getElementById("actualPassword").classList.add("wrongAnswer");
//               }
//             })
//           }
//         }).catch((error) => {
//           // Lidar com erros na busca do usuário
//           console.error("Erro na busca do usuário:", error);
//           UserService.edit(user, user.id)
//             .then(() => {
//               window.location.reload();
//             })
//             .catch((error) => {
//               console.error("Erro na criação do usuário:", error);
//             });
//         });
//       } else {
//         alert("Confirmação de senha errada!")
//         document.getElementById("password").classList.add("wrongAnswer");
//         document.getElementById("verifyPassword").classList.add("wrongAnswer");
//       }
//     } else {
//       alert("Preencha todos os campos!")
//       if (name == '') {
//         document.getElementById("name").classList.add("wrongAnswer");
//       }
//       if (pass == '') {
//         document.getElementById("password").classList.add("wrongAnswer");
//       }
//       if (verPas == '') {
//         document.getElementById("verifyPassword").classList.add("wrongAnswer");
//       }
//       if (acPas == '') {
//         document.getElementById("actualPassword").classList.add("wrongAnswer");
//       }
//     }
//   }

//   return (
//     <>
//       <NavBar />
//       <Form className='container-content'>
//           <Row className="mb-3">
//             <Form.Group>
//               <Form.Label>Nickname</Form.Label>
//               <Form.Control type="text" id='name' name='name' value={user.name} />
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col}>
//               <Form.Label>Put your actual password</Form.Label>
//               <Form.Control type="password" placeholder="Actual password" id='actualPassword' />
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col}>
//               <Form.Label>Create a password</Form.Label>
//               <Form.Control type="password" placeholder="Password" id="password" name="password" onChange={editUser} value={user.password} />
//             </Form.Group>
//           </Row>
//           <Row className="mb-3">
//             <Form.Group as={Col}>
//               <Form.Label>Confirm your new password</Form.Label>
//               <Form.Control type="password" placeholder="Password" id='verifyPassword' />
//             </Form.Group>
//           </Row>

//           <Button variant="primary" type="submit" onClick={register}>
//             Submit
//           </Button>
//         </Form>
//     </>
//   );
// }

// export default EditPerson;


import { Button, Col, Form, Row } from 'react-bootstrap';
import './EditPerson.css';
import React, { useEffect, useState } from 'react';
import NavBar from '../nav-bar/Nav';
import { UserService } from '../../service/UserService';

function EditPerson() {
  const actualUser = UserService.showOneByName(localStorage.getItem('user'));

  const [user, setUser] = useState({
    name: localStorage.getItem('user'),
    password: ''
  });

  const [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    if (selectedUserId) {
      UserService.showOne(selectedUserId)
        .then((response) => {
          setUser(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [selectedUserId]);

  const editUser = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  function register(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const pass = document.getElementById('password').value;
    const verPas = document.getElementById('verifyPassword').value;
    const acPas = document.getElementById('actualPassword').value;

    const nameInput = document.getElementById('name');
    const passInput = document.getElementById('password');
    const verPasInput = document.getElementById('verifyPassword');
    const acPasInput = document.getElementById('actualPassword');

    nameInput.classList.remove('wrongAnswer');
    passInput.classList.remove('wrongAnswer');
    verPasInput.classList.remove('wrongAnswer');
    acPasInput.classList.remove('wrongAnswer');

    if (name !== '' && pass !== '' && verPas !== '' && acPas !== '') {
      if (pass === verPas) {
        UserService.showOneByName(name)
          .then((resultName) => {
            if (resultName) {
              UserService.showOne(resultName.data.id)
                .then((resultId) => {
                  if (resultId.data.name === resultName.data.name) {
                    if (resultId.data.password === acPas) {
                      console.log(user);
                      UserService.edit(user, user.id)
                        .then(() => {
                          window.location.reload();
                        })
                        .catch((error) => {
                          console.error('Erro na edição do usuário:', error);
                        });
                    } else {
                      alert('Senha incorreta!');
                      acPasInput.classList.add('wrongAnswer');
                    }
                  } else {
                    alert('Esse nome já existe!');
                    nameInput.classList.add('wrongAnswer');
                  }
                });
            } else {
              actualUser.then((resultName) => {
                if (resultName.data.password === acPas) {
                  UserService.edit(user, user.id)
                    .then(() => {
                      window.location.reload();
                    })
                    .catch((error) => {
                      console.error('Erro na edição do usuário:', error);
                    });
                } else {
                  alert('Senha incorreta!');
                  acPasInput.classList.add('wrongAnswer');
                }
              });
            }
          })
          .catch((error) => {
            console.error('Erro na busca do usuário:', error);
            UserService.edit(user, user.id)
              .then(() => {
                window.location.reload();
              })
              .catch((error) => {
                console.error('Erro na edição do usuário:', error);
              });
          });
      } else {
        alert('Confirmação de senha errada!');
        passInput.classList.add('wrongAnswer');
        verPasInput.classList.add('wrongAnswer');
      }
    } else {
      alert('Preencha todos os campos!');
      if (name === '') {
        nameInput.classList.add('wrongAnswer');
      }
      if (pass === '') {
        passInput.classList.add('wrongAnswer');
      }
      if (verPas === '') {
        verPasInput.classList.add('wrongAnswer');
      }
      if (acPas === '') {
        acPasInput.classList.add('wrongAnswer');
      }
    }
  }

  return (
    <>
      <NavBar />
      <Form className="container-content">
        <Row className="mb-3">
          <Form.Group>
            <Form.Label>Nickname</Form.Label>
            <Form.Control type="text" id="name" name="name" value={user.name} readOnly />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Put your actual password</Form.Label>
            <Form.Control type="password" placeholder="Actual password" id="actualPassword" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Create a password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              id="password"
              name="password"
              onChange={editUser}
              value={user.password}
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Confirm your new password</Form.Label>
            <Form.Control type="password" placeholder="Password" id="verifyPassword" />
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit" onClick={register}>
          Submit
        </Button>
      </Form>
    </>
  );
}

export default EditPerson;
