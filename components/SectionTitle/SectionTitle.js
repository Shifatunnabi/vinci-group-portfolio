import React from 'react';

const SectionTitle = ({ title, subtitle }) => {
    return (
        <div className="wpo-section-title">
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
        </div>
    );
};

export default SectionTitle;