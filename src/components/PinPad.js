'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function PinPad({ title, expectedPin, onSuccess, onCancel, theme = 'default' }) {
  const [pin, setPin] = useState('');
  const [error, setError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (pin.length === 4 && !isSuccess) {
      if (pin === expectedPin) {
        setIsSuccess(true);
        onSuccess();
      } else {
        setError(true);
        setTimeout(() => {
          setPin('');
          setError(false);
        }, 800);
      }
    }
  }, [pin, expectedPin, onSuccess]);

  const handlePress = (num) => {
    if (pin.length < 4 && !error) {
      setPin(prev => prev + num);
    }
  };

  const handleDelete = () => {
    if (!error) {
      setPin(prev => prev.slice(0, -1));
    }
  };

  const getThemeColors = () => {
    if (theme === 'amay') return 'linear-gradient(135deg, rgba(30,136,229,0.9), rgba(66,165,245,0.9))';
    if (theme === 'ayra') return 'linear-gradient(135deg, rgba(224,64,251,0.9), rgba(206,147,216,0.9))';
    return 'linear-gradient(135deg, rgba(162,155,254,0.95), rgba(108,92,231,0.95))';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        background: getThemeColors(),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(10px)',
        padding: '20px',
      }}
    >
      <div style={{
        background: 'rgba(255, 255, 255, 0.1)',
        padding: '40px',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        maxWidth: '400px',
        width: '100%',
        textAlign: 'center',
      }}>
        <h2 style={{
          color: 'white',
          fontSize: 'var(--text-2xl)',
          fontFamily: 'var(--font-display)',
          marginBottom: '24px',
        }}>
          {title || 'Enter PIN'}
        </h2>

        {/* PIN Dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={error ? { x: [-5, 5, -5, 5, 0] } : {}}
              transition={{ duration: 0.4 }}
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: i < pin.length ? 'white' : 'rgba(255,255,255,0.2)',
                boxShadow: i < pin.length ? '0 0 10px rgba(255,255,255,0.5)' : 'none',
              }}
            />
          ))}
        </div>

        {/* Numpad */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '16px',
          marginBottom: '24px',
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <motion.button
              key={num}
              onClick={() => handlePress(num.toString())}
              whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '70px',
                height: '70px',
                margin: '0 auto',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)',
                border: '1px solid rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {num}
            </motion.button>
          ))}
          <div /> {/* Empty space bottom left */}
          <motion.button
            onClick={() => handlePress('0')}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.25)' }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '70px',
              height: '70px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            0
          </motion.button>
          <motion.button
            onClick={handleDelete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              width: '70px',
              height: '70px',
              margin: '0 auto',
              borderRadius: '50%',
              background: 'transparent',
              border: 'none',
              color: 'rgba(255,255,255,0.8)',
              fontSize: '1.5rem',
              cursor: 'pointer',
            }}
          >
            ⌫
          </motion.button>
        </div>

        <motion.button
          onClick={onCancel}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{
            background: 'transparent',
            border: 'none',
            color: 'rgba(255,255,255,0.6)',
            fontSize: '1rem',
            cursor: 'pointer',
            padding: '8px 16px',
          }}
        >
          Cancel
        </motion.button>
      </div>
    </motion.div>
  );
}
