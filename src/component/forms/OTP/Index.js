import React, { useState } from 'react';

const Index = () => {

    return (
        <div className='otp'>
            <div className='screen_otp'>

                <form method="get" className="digit-group" data-group-name="digits" data-autosubmit="false" autocomplete="off">
                    <input type="number" id="digit-1" name="digit-1" data-next="digit-2" />
                    <input type="number" id="digit-2" name="digit-2" data-next="digit-3" data-previous="digit-1" />
                    <input type="number" id="digit-3" name="digit-3" data-next="digit-4" data-previous="digit-2" />
                    <span className="splitter">&ndash;</span>
                    <input type="number" id="digit-4" name="digit-4" data-next="digit-5" data-previous="digit-3" />
                    <input type="number" id="digit-5" name="digit-5" data-next="digit-6" data-previous="digit-4" />
                    <input type="number" id="digit-6" name="digit-6" data-previous="digit-5" />
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Index;