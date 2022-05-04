import React from 'react';

export const AppContext = React.createContext(null);

export const ContextWrapper = (props) => {
	const [ store, setStore ] = React.useState(1);
	
	const [ actions ] = React.useState({
		addTask: pageNum => setStore(pageNum)
	});

	const [menuOpen, setMenuOpen] = React.useState(false);
	const [setValue] = React.useState({
		setMenu: valueSet => setMenuOpen(valueSet)
	});
	
	return (
		<AppContext.Provider value={{ store, actions, menuOpen, setValue }}>
			{props.children}
		</AppContext.Provider>
	);
}