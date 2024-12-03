import { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const API_URL = "http://localhost:3001/usuarios";

function Admin() {
  const [usuarios, setUsuarios] = useState([]);
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    sexo: "",
    sintomas: [],
    avaliacao: "",
    comentarios: []
  });

  // Carregar os usuários da API
  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setUsuarios(response.data);
      })
      .catch(error => {
        console.error("Erro ao carregar usuários:", error);
      });
  }, []);

  // Função para adicionar um novo usuário
  const adicionarUsuario = async () => {
    try {
      const response = await axios.post(API_URL, novoUsuario);
      setUsuarios([...usuarios, response.data]);
      setNovoUsuario({ nome: "", sexo: "", sintomas: [], avaliacao: "", comentarios: [] });
      alert("Usuário adicionado com sucesso!");
    } catch (error) {
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  // Função para adicionar um comentário em um usuário
  const adicionarComentario = (usuarioId) => {
    const comentario = prompt("Digite seu comentário:");
    if (comentario) {
      const usuarioIndex = usuarios.findIndex((user) => user.id === usuarioId);
      const updatedUsuarios = [...usuarios];
      updatedUsuarios[usuarioIndex].comentarios.push(comentario);

      axios.put(`${API_URL}/${usuarioId}`, updatedUsuarios[usuarioIndex])
        .then(() => {
          setUsuarios(updatedUsuarios);
          alert("Comentário adicionado com sucesso!");
        })
        .catch((error) => {
          console.error("Erro ao adicionar comentário:", error);
        });
    }
  };

  // Função para renderizar a lista de usuários
  const renderUsuarios = () => {
    return usuarios.map((usuario) => (
      <div key={usuario.id} className="usuario-item p-4 bg-white rounded-lg shadow-md mb-4">
        <h3 className="text-xl font-semibold">{usuario.nome}</h3>
        <p className="text-md text-gray-600">{usuario.sexo}</p>
        <p className="text-md text-gray-600">Sintomas: {usuario.sintomas.join(", ")}</p>
        <p className="text-md text-gray-600">Avaliação: {usuario.avaliacao}</p>
        <button 
          onClick={() => adicionarComentario(usuario.id)} 
          className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Adicionar Comentário
        </button>
        <div className="mt-2">
          <h4 className="font-semibold">Comentários:</h4>
          {usuario.comentarios.map((comentario, index) => (
            <p key={index} className="text-sm text-gray-700">{comentario}</p>
          ))}
        </div>
      </div>
    ));
  };

  return (
    <>
    <div className='mb-20'>

    <Navbar/>
    </div>
    <div className="admin-container max-w-screen-lg mx-auto p-4">
      <h1 className="text-3xl text-center font-bold mb-8">Admin - Gerenciamento de Entrevistas</h1>
      
      {/* Lista de Usuários */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Lista de Usuários</h2>
        {renderUsuarios()}
      </section>

      {/* Adicionar Novo Usuário */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Adicionar Novo Usuário</h2>
        <input
          type="text"
          value={novoUsuario.nome}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, nome: e.target.value })}
          placeholder="Nome"
          className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
        <input
          type="text"
          value={novoUsuario.sexo}
          onChange={(e) => setNovoUsuario({ ...novoUsuario, sexo: e.target.value })}
          placeholder="Sexo"
          className="block w-full p-3 mb-4 border border-gray-300 rounded-lg"
          />
        <button 
          onClick={adicionarUsuario} 
          className="w-full sm:w-auto bg-green-500 text-white py-2 px-4 rounded-lg"
          >
          Adicionar Usuário
        </button>
      </section>
    </div>
    <div>
      <Footer/>
    </div>
          </>
  );
}

export default Admin;
