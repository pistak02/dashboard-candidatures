import './Candidature.css';

function Candidature({ data }){
    const {entreprise, adresse, poste, statut, date, lienOffre, notes} = data;

    return (
        <div className="candidature">
            <div className="entreprise">
                <div className="logo-entreprise">
                    <a href={lienOffre} target='_blank' rel='noreferrer'><img src="/assets/capgemini.png" alt={`Logo ${entreprise}`}/></a>
                </div>
                <div className="nom-entreprise">
                    {entreprise}
                </div>
                <div className="adresse-entreprise">
                    {adresse}
                </div>
            </div>
            <div className='poste'>
                {poste}
            </div>
            <div className='statut'>
                {statut}
                <div className='liste-statuts'>
                    <select defaultValue={statut}>

                    </select>
                </div>
            </div>
            <div className='date'>
                {new Date(date).toLocaleDateString()}
            </div>
            <div className='notes'>
                <label htmlFor='note'>Notes</label>
                <textarea id='note' name='note' rows='5' cols='20' defaultValue={notes}></textarea>
            </div>
        </div>
    );
}

export default Candidature;