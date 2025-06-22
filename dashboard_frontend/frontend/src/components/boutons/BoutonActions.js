import { useState, useRef, useEffect } from 'react';
import './BoutonActions.css';
import { useNavigate } from "react-router-dom";
import { deleteCandidature } from '../../services/candidatureService';

function BoutonActions({id, onRefresh}) {
    const [ouvert, setOuvert] = useState(false);
    const navigate = useNavigate();
    const menuRef = useRef(null);


    const afficherMenu = () => {
        setOuvert(!ouvert); 
    };

    const handleGoToCandidatureDetails = () => {
        navigate(`/details-candidature/${id}`)
    };

    const handleGoToModifierCandidature = () => {
        navigate(`/modifier-candidature/${id}`)
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm("Supprimer cette candidature ?");
        if (!confirmDelete) {
            return;
        }

        try {
            await deleteCandidature({id: id});
            onRefresh();
        } catch (error) {
            console.error("Erreur lors de la suppresion de la candidature" + error);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
            setOuvert(false);
            }
        };

        if (ouvert) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        }, [ouvert]);

    return (
        <div className='btn-actions-container' ref={menuRef}>
            {!ouvert && (<button className='btn-actions' onClick={afficherMenu}>
                <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"  className="btn-actions-svg">
                    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                </svg>
            </button>
            )}
            

            <div className={`menu-btns ${ouvert ? `ouvert` : ''}`}>
                <div className='menu-btn btn-details'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleGoToCandidatureDetails}>
                        <circle cx="11.5" cy="11.5" r="9.5"/>
                        <path d="M20 20L22 22" stroke-linecap="round"/>
                    </svg>
                </div>
                <div className='menu-btn btn-modifier'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleGoToModifierCandidature}>
                        <path d="M14.3601 4.07866L15.2869 3.15178C16.8226 1.61607 19.3125 1.61607 20.8482 3.15178C22.3839 4.68748 22.3839 7.17735 20.8482 8.71306L19.9213 9.63993M14.3601 4.07866C14.3601 4.07866 14.4759 6.04828 16.2138 7.78618C17.9517 9.52407 19.9213 9.63993 19.9213 9.63993M14.3601 4.07866L5.83882 12.5999C5.26166 13.1771 4.97308 13.4656 4.7249 13.7838C4.43213 14.1592 4.18114 14.5653 3.97634 14.995C3.80273 15.3593 3.67368 15.7465 3.41556 16.5208L2.32181 19.8021M19.9213 9.63993L11.4001 18.1612C10.8229 18.7383 10.5344 19.0269 10.2162 19.2751C9.84082 19.5679 9.43469 19.8189 9.00498 20.0237C8.6407 20.1973 8.25352 20.3263 7.47918 20.5844L4.19792 21.6782M4.19792 21.6782L3.39584 21.9456C3.01478 22.0726 2.59466 21.9734 2.31063 21.6894C2.0266 21.4053 1.92743 20.9852 2.05445 20.6042L2.32181 19.8021M4.19792 21.6782L2.32181 19.8021" />
                    </svg>
                </div>
                <div className='menu-btn btn-supprimer'>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={handleDelete}>
                        <path d="M20.5001 6H3.5" stroke-linecap="round"/>
                        <path d="M18.8332 8.5L18.3732 15.3991C18.1962 18.054 18.1077 19.3815 17.2427 20.1907C16.3777 21 15.0473 21 12.3865 21H11.6132C8.95235 21 7.62195 21 6.75694 20.1907C5.89194 19.3815 5.80344 18.054 5.62644 15.3991L5.1665 8.5" stroke-linecap="round"/>
                        <path d="M9.5 11L10 16" stroke-linecap="round"/>
                        <path d="M14.5 11L14 16" stroke-linecap="round"/>
                        <path d="M6.5 6C6.55588 6 6.58382 6 6.60915 5.99936C7.43259 5.97849 8.15902 5.45491 8.43922 4.68032C8.44784 4.65649 8.45667 4.62999 8.47434 4.57697L8.57143 4.28571C8.65431 4.03708 8.69575 3.91276 8.75071 3.8072C8.97001 3.38607 9.37574 3.09364 9.84461 3.01877C9.96213 3 10.0932 3 10.3553 3H13.6447C13.9068 3 14.0379 3 14.1554 3.01877C14.6243 3.09364 15.03 3.38607 15.2493 3.8072C15.3043 3.91276 15.3457 4.03708 15.4286 4.28571L15.5257 4.57697C15.5433 4.62992 15.5522 4.65651 15.5608 4.68032C15.841 5.45491 16.5674 5.97849 17.3909 5.99936C17.4162 6 17.4441 6 17.5 6"/>
                    </svg>
                </div>
            </div>
            
        </div>
    );
}

export default BoutonActions;