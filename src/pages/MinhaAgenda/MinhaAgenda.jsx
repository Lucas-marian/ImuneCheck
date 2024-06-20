/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import DatePicker from 'react-datepicker';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import './MinhaAgenda.css';

const MinhaAgenda = () => {
const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
const [campanhas, setCampanhas] = useState([
{ id: 1, nome: 'Vacinação Infantil', categoria: 'criança', dataInicio: new Date(), dataFim: new Date() },
{ id: 2, nome: 'Vacinação Adolescente', categoria: 'adolescente', dataInicio: new Date(), dataFim: new Date() },
{ id: 3, nome: 'Vacinação Adulto', categoria: 'adulto', dataInicio: new Date(), dataFim: new Date() },
{ id: 4, nome: 'Vacinação Idoso', categoria: 'idoso', dataInicio: new Date(), dataFim: new Date() },
{ id: 5, nome: 'Vacinação gestante', categoria: 'gestante', dataInicio: new Date(), dataFim: new Date() },
]);

const [nomeCampanha, setNomeCampanha] = useState('');
const [categorias, setCategorias] = useState([]);
const [dataInicio, setDataInicio] = useState(null);
const [dataFim, setDataFim] = useState(null);

const handleCategoriaClick = (categoria) => {
setCategoriaSelecionada(categoria);
};

const handleCategoriaChange = (categoria) => {
setCategorias((prev) =>
prev.includes(categoria) ? prev.filter((cat) => cat !== categoria) : [...prev, categoria]
);
};

const handleSubmit = (e) => {
e.preventDefault();
const novaCampanha = {
id: campanhas.length + 1,
nome: nomeCampanha,
categoria: categorias,
dataInicio,
dataFim,
};
setCampanhas([...campanhas, novaCampanha]);
setNomeCampanha('');
setCategorias([]);
setDataInicio(null);
setDataFim(null);
};

const campanhasFiltradas = campanhas.filter((campanha) =>
campanha.categoria.includes(categoriaSelecionada)
);

return (
<div className="dashboard">
<div className="main-content">
<div className="dashboard-content">
<header className="header">
<input type="search" placeholder="Pesquisar" />
<button>Pesquisar</button>
<div className="user-info"></div>
</header>

      <section className="welcome-section">
        <h2>Bem-vindo à sua agenda de campanhas</h2>
        <h1>Vamos começar?</h1>

      </section>

      {/* Seção de Pastas */}
      <section className="folders-section">
        <button onClick={() => handleCategoriaClick('criança')}>Campanhas da Criança</button>
        <button onClick={() => handleCategoriaClick('adolescente')}>Campanhas do Adolescente</button>
        <button onClick={() => handleCategoriaClick('adulto')}>Campanhas do Adulto</button>
        <button onClick={() => handleCategoriaClick('idoso')}>Campanhas do Idoso</button>
        <button onClick={() => handleCategoriaClick('gestante')}>Campanhas da Gestante</button>
      </section>

      {/* Seção de Campanhas Filtradas */}
      {categoriaSelecionada && (
        <section className="recent-files-section">
          <h3>Campanhas para {categoriaSelecionada.charAt(0).toUpperCase() + categoriaSelecionada.slice(1)}</h3>
          {campanhasFiltradas.length > 0 ? (
            campanhasFiltradas.map((campanha) => (
              <div key={campanha.id} className="file-card">
                {campanha.nome}
              </div>
            ))
          ) : (
            <p>Nenhuma campanha encontrada para esta categoria.</p>
          )}
        </section>
      )}
    </div>
  </div>

  {/* Barra Lateral Direita */}
  <aside className="right-sidebar">
    <div className="right-sidebar-section">
      <section className="calendar-section">
        <h3>Calendário</h3>
        <div className="calendar-wrapper">
          <Calendar />
        </div>
      </section>
    </div>

    <div className="right-sidebar-section">
      <section className="task-section">
        <h3>Cadastrar Campanha</h3>
        <form onSubmit={handleSubmit}>
          <label>
            Nome da Campanha:
            <input
              type="text"
              value={nomeCampanha}
              onChange={(e) => setNomeCampanha(e.target.value)}
              required
            />
          </label>
          <fieldset>
            <legend>Categorias:</legend>
            <label>
              <input
                type="checkbox"
                checked={categorias.includes('criança')}
                onChange={() => handleCategoriaChange('criança')}
              />
              Criança
            </label>
            <label>
              <input
                type="checkbox"
                checked={categorias.includes('adolescente')}
                onChange={() => handleCategoriaChange('adolescente')}
              />
              Adolescente
            </label>
            <label>
              <input
                type="checkbox"
                checked={categorias.includes('adulto')}
                onChange={() => handleCategoriaChange('adulto')}
              />
              Adulto
            </label>
            <label>
              <input
                type="checkbox"
                checked={categorias.includes('idoso')}
                onChange={() => handleCategoriaChange('idoso')}
              />
              Idoso
            </label>
            <label>
              <input
                type="checkbox"
                checked={categorias.includes('gestante')}
                onChange={() => handleCategoriaChange('gestante')}
              />
              Gestante
            </label>
          </fieldset>
          <label>
            Data de Início:
            <DatePicker
              selected={dataInicio}
              onChange={(date) => setDataInicio(date)}
              selectsStart
              startDate={dataInicio}
              endDate={dataFim}
              dateFormat="dd/MM/yyyy"
              required
            />
          </label>
          <label>
            Data de Fim:
            <DatePicker
              selected={dataFim}
              onChange={(date) => setDataFim(date)}
              selectsEnd
              startDate={dataInicio}
              endDate={dataFim}
              minDate={dataInicio}
              dateFormat="dd/MM/yyyy"
              required
            />
          </label>
          <button type="submit">Cadastrar Campanha</button>
        </form>
      </section>
    </div>
  </aside>
</div>
);
};

export default MinhaAgenda;