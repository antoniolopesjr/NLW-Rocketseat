import React from 'react';
import PageHeader from '../../assets/components/PageHeader';

import './styles.css';
import TeacherItem from '../../assets/components/TeacherItem';

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" name="" id="subject"/>
          </div>

          <div className="input-block">
            <label htmlFor="subject">Dia da semana</label>
            <input type="text" name="" id="week_day"/>
          </div>

          <div className="input-block">
            <label htmlFor="subject">Hora</label>
            <input type="text" name="" id="time"/>
          </div>
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  )
}

export default TeacherList;