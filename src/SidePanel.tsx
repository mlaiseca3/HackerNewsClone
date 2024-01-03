
// import React from 'react';

const SidePanel = () => {
	const sidePanelSections = [
		'Home', 
		'New', 
		'Past', 
		'Comments', 
		'Ask', 
		'Show', 
		'Jobs',
		'Submit'
	]
	const dictionary = sidePanelSections.reduce((acc, currentValue, index) => {
		acc[index] = currentValue;
		return acc;
	}, {});

	const listItems = Object.keys(dictionary).map(key =>
		<li key={key}>
			{dictionary[key]}
		</li>
	);

	return (
    <div className="side-panel">
      <h2>Side Panel</h2>
      {/* Add your side panel content here */

				<ul> {listItems} </ul>


			}


    </div>
  );
};

export default SidePanel;
