import React from 'react';
const BonPlan = () => {

    return (
        <div className='bonplan'>
            <div className='bonplan_contnaire'>
                <div className='bonplan_left'>
                    <div className='bonplan_left_images'>
                        <span className='bg1'>black friday weeks <span className='bg1_bg1'>black friday weeks</span>black friday weeks</span>
                        <span className='bg1 bg1_left'>black friday weeks <span className='bg1_bg1'>black friday weeks</span>black friday weeks<span className='bg1_bg1'>black friday weeks</span></span>
                        <img src='../images/bb1.png' />
                        <span className='bg1 bg1_right'>black friday weeks <span className='bg1_bg1'>black friday weeks</span>black friday weeks<span className='bg1_bg1'>black friday weeks</span></span>
                        <span className='bg1 bg1_bottom'>black friday weeks <span className='bg1_bg1'>black friday weeks</span>black friday weeks</span>
                    </div>
                </div>
                <div className='bonplan_right'>
                    <div className='bonplan_right_desc'>
                        <span className='bonplan_right_desc_solde'>-300€</span>
                        <div className='bonplan_left_images'>
                            <img src='../images/velo.png' />
                        </div>
                        <span className='bonplan_right_desc_price'>
                            <span className='bonplan_right_desc_price_old'> 999,99€</span> 699,99€
                        </span>
                        <span className='bonplan_right_desc_title'>
                        nakamura
                        </span>
                        <span className='bonplan_right_desc_article'>
                        VTT électrique E-CLIFF LTD
                        </span>
                        <a className='bonplan_right_desc_article_btn' href="#">J’achète</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BonPlan;