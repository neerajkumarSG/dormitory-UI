import React from 'react';

function ResidentsList(props) {
  const nameList = props.name;
  const studentList = nameList && nameList.map((item, key) => {
  return  <li key={key}>{item.name}</li>
  })

  return (
    <div>
   		<div className="pa-10 mt-10 w-75">
			<div className="font-weight-bold text-center">Residents List</div>
			<ul className="mt-10 styled w-50 mx-auto" data-testid="residentsNameList">
				{studentList}
			</ul>
		</div>

    </div>
  )
}
export default ResidentsList;
