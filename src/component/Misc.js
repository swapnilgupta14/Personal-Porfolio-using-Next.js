import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const Misc = () => {
    return (
        <div className="misc-container ">
            <div className='inner'>
                <h2>I'd love to hear from you! Whether you have a question, a collaboration idea, or just want to connect, feel free to reach out.</h2>
                <div className='buttons'>
                    <Link href="https://buymeacoffee.com/14guptaswapnil">
                        <button >But Me a Cofee</button>
                    </Link>
                    <Link href="mailto:mail.swapnilgupta@gmail.com">
                        <button>Contact Me</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Misc;
