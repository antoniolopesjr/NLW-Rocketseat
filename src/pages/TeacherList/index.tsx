import React from 'react';
import PageHeader from '../../assets/components/PageHeader';

import './styles.css';

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form action="" id="search-teachers"></form>
      </PageHeader>
    </div>
  )
}

export default TeacherList;