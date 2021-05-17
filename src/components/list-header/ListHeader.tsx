import React from 'react';

type Props = {
    readonly title?: string;
    readonly results: number;
}

const ListHeader: React.FC<Props> = ({ title = 'Movies', results = 0 }: Props) => {
    return (
        <div className="col-12 mb-3">
            <div className="row">
                <div className="col-6">
                    <h2>{title}</h2>
                </div>
                <div className="col-6 d-flex align-items-center justify-content-end">
                    <b className="mr-2">Results:</b> {results}
                </div>
            </div>
        </div>
    )
}

export default ListHeader;
