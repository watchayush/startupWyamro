// import { ApolloProvider, useLazyQuery } from '@apollo/client';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import { ThemeProvider } from '@material-ui/core/styles';
// import { LicenseManager } from 'ag-grid-enterprise';
// import { CachePersistor, LocalStorageWrapper } from 'apollo3-cache-persist';
// import dynamic from 'next/dynamic';
// import { useRouter } from 'next/router';
// import PropTypes from 'prop-types';
// import React, { useCallback, useEffect, useState } from 'react';
// import { DndProvider } from 'react-dnd';
// import { HTML5Backend } from 'react-dnd-html5-backend';
// import content from '../../content/en';
// import IdleTimeHandler from '../components/molecules/IdleTimeHandler';
// import LoginPage from '../components/templates/LoginPage';
// import { GraphQLClient } from '../graphQL/ApolloClient';
// import { cache } from '../graphQL/cache';
// import { LabelProvider, useLabels } from '../stores/labels';
// import { theme } from '../theme';
// import './AgGrid.css';
// import './AgGridTheme.css';
// import { GET_AG_GRID_KEY } from '../graphQL/Queries/AggridKey';
// import { env } from '../../config/endpoints';

// const Layout = dynamic(() => import('../components/templates/Layout'), {
//   loading: () => <p>Loading ...</p>,
// });
// const AppComponent = ({ Component, pageProps }) => {
//   const { setLabels } = useLabels();

//   const [getAgGridLicenseKey] = useLazyQuery(GET_AG_GRID_KEY, {
//     fetchPolicy: 'network-only',
//     onCompleted(data) {
//       if (data?.getAggridKeyValue) LicenseManager.setLicenseKey(data.getAggridKeyValue);
//     },
//   });

//   useEffect(() => {
//     getAgGridLicenseKey();
//     setLabels({ global: content });
//   }, []);

//   return <Component {...pageProps} />;
// };

// AppComponent.propTypes = {
//   Component: PropTypes.func.isRequired,
//   pageProps: PropTypes.shape({}).isRequired,
// };

// function App({ Component, pageProps }) {
//   const [client, setClient] = useState();
//   const [persistor, setPersistor] = useState();

//   const apolloClient = GraphQLClient();

//   const router = useRouter();
//   // const authenticated = useReactiveVar(isAuthenticated);

//   useEffect(() => {
//     // Remove the server-side injected CSS.
//     const jssStyles = document.querySelector('#jss-server-side');
//     if (jssStyles) {
//       jssStyles.parentElement.removeChild(jssStyles);
//     }
//   }, []);

//   useEffect(() => {
//     async function init() {
//       let newPersistor = new CachePersistor({
//         cache,
//         storage: new LocalStorageWrapper(window.localStorage),
//         debug: true,
//         trigger: 'write',
//       });
//       await newPersistor.restore();
//       setPersistor(newPersistor);
//       setClient(apolloClient);
//     }

//     init().catch(console.error);
//   }, []);

//   const clearCache = useCallback(() => {
//     if (!persistor) {
//       return;
//     }
//     persistor.purge();
//   }, [persistor]);

//   const reload = useCallback(() => {
//     window.location.reload();
//   }, []);

//   if (!client) {
//     return <h2>Initialising app...</h2>;
//   }

//   const isAuthenticated = localStorage.getItem('authenticated');

//   return (
//     <>
//       <ApolloProvider client={client}>
//         <ThemeProvider theme={theme}>
//           {/* <link
//             rel="stylesheet"
//             href="https://unpkg.com/@ag-grid-community/all-modules@25.1.0/dist/styles/ag-grid.css"
//           />

//           <link
//             rel="stylesheet"
//             href="https://unpkg.com/@ag-grid-community/all-modules@25.1.0/dist/styles/ag-theme-alpine.css"
//           /> */}
//           <CssBaseline />
//           <LabelProvider>
//             <DndProvider backend={HTML5Backend}>
//               {/* add idle timer here */}
//               {isAuthenticated && (
//                 <Layout>
//                   <IdleTimeHandler />
//                   {/* <UserProfiles /> */}
//                   <AppComponent Component={Component} pageProps={pageProps} />{' '}
//                 </Layout>
//               )}
//               {!isAuthenticated && <LoginPage />}
//             </DndProvider>
//           </LabelProvider>
//         </ThemeProvider>
//       </ApolloProvider>
//     </>
//   );
// }

// App.propTypes = {
//   Component: PropTypes.func.isRequired,
//   pageProps: PropTypes.shape({}).isRequired,
// };

// export function reportWebVitals(metric) {
//   // TODO: send these results to some backend
// }

// export default App;
