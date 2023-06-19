import styles from './Prato.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';
import TagsPrato from 'components/TagsPrato';
import NotFound from 'pages/NotFound';
import Header from 'components/Header';

export default function Prato() {
    const { id } = useParams();
    const prato = cardapio.find(item => item.id === Number(id));

    if (!prato) {
        return <>
            <NotFound />
        </>;
    }

    const navigate = useNavigate();

    return (
        <Header>
            <button className={styles.voltar} onClick={() => navigate(-1)}>
                {'< Voltar'}
            </button>
            <section className={styles.container}>
                <h1 className={styles.titulo}>
                    {prato.title}
                </h1>
                <div className={styles.imagem}>
                    <img src={prato.photo} alt={prato.title} />
                </div>
                <TagsPrato {...prato} />
            </section>
        </Header>
    );
}