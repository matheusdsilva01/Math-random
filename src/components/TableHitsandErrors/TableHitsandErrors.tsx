import { useRef } from "react";
import { Calculation } from "../../interfaces/Calculation";
import './TableHitsandErrors.css';

interface TableHitsandErrorsProps {
    hits: Calculation[];
    errors: Calculation[]
}

function TableHitsandErrors({ hits, errors }: TableHitsandErrorsProps) {
    const tableCorrects = useRef<HTMLTableRowElement>(null);
    const tableErrors = useRef<HTMLTableRowElement>(null);

    return (
        <>
            <table className="container">
                {/* table hits */}
                <tbody>
                    <tr className="table corrects" ref={tableCorrects}>
                        <td>
                            <h1><strong>Acertos: {hits.length}</strong></h1>
                        </td>
                        {hits && hits.map((hit, index) => (
                            <td key={index}>{hit.conta} = {hit.resposta}</td>
                        ))}
                    </tr>

                    {/* table errors */}
                    <tr className="table errors" ref={tableErrors}>
                        <td><h1><strong>Erros: {errors.length}</strong></h1></td>
                        {errors && errors.map((error, index) => (
                            <td key={index}>{error.conta} = {error.resposta}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default TableHitsandErrors;