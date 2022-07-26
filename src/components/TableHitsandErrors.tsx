import { Calculation } from "../interfaces/Calculation";
import './TableHitsandErrors.css';

interface TableHitsandErrorsProps {
    hits: Calculation[];
    errors: Calculation[]
}
function TableHitsandErrors({ hits, errors }: TableHitsandErrorsProps) {
    return (
        <>
            <table className="container">
                {/* table hits */}
                <tr className="table corrects">
                    <h1><strong>Acertos</strong></h1>
                    {hits && hits.map((hit, index) => (
                        <td key={index}>{hit.conta} = {hit.resposta}</td>
                    ))}
                </tr>

                {/* table errors */}
                <tr className="table errors">
                    <h1><strong>Erros</strong></h1>
                    {errors && errors.map((error, index) => (
                        <td key={index}>{error.conta} = {error.resposta}</td>
                    ))}
                </tr>
            </table>
        </>
    )
}

export default TableHitsandErrors;