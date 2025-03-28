function depurarPerfiles(json) {
  let firstPerfiles = Object.values(json);
  let perfiles = [];
  firstPerfiles.forEach((perfil) => {
    perfiles.push({
      id: perfil._id,
      nombre: perfil.name,
      edad: perfil.age,
      correo: perfil.email,
      telefono: perfil.phone,
      amigos: perfil.friends,
    });
    console.log(Object.values(perfiles));
  });
  return perfiles;
}

module.exports = depurarPerfiles;
