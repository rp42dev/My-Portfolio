import React from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
	const [ store, setStore ] = React.useState('1');
	const [ actions ] = React.useState({
		addTask: pageNum => setStore(pageNum)
	});
	
	return (
		<AppContext.Provider value={{ store, actions }}>
			{props.children}
		</AppContext.Provider>
	);
}