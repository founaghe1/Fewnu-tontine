import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Layout from '../Layout/Layout';
import CarteTontine from './CarteTontine';

const Tontine = ({ match }) => {
    const { tontineId } = match.params;
    const [cotisations, setCotisations] = useState([]);

    useEffect(() => {
        axios.get(`fewnu-tontin.onrender.com/getCotisationsByTontine/getCotisationsByTontine/${tontineId}`)
            .then((response) => {
                const sortedCotisations = response.data.sort((a, b) => {
                    return new Date(b.createdAt) - new Date(a.createdAt);
                });

                setCotisations(sortedCotisations);
            })
            .catch((error) => {
                console.error('Erreur lors de la récupération des cotisations de la tontine', error);
            });
    }, [tontineId]);

    return (
        <Layout>
            <div className='container-fluid pt-3 page-totine d-flex justify-content-center '>
                <div className='d-flex flex-column justify-content-center cart'>
                    <Link to='/detailCotisation' className='text-decoration-none text-dark'>
                        {cotisations.map((cotisation) => (
                            <CarteTontine
                                key={cotisation.id}
                                mois={cotisation.mois}
                                via={cotisation.via}
                                montant={cotisation.montant}
                                date={cotisation.date}
                                heure={cotisation.heure}
                                statut={cotisation.statut}
                            />
                        ))}
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Tontine;
