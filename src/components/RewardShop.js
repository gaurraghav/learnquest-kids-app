'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import useStore from '../store/useStore';

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } }
};

export default function RewardShop() {
  const goHome = useStore((s) => s.goHome);
  const currentChild = useStore((s) => s.currentChild);
  const children = useStore((s) => s.children);
  const rewards = useStore((s) => s.rewards);
  const purchaseReward = useStore((s) => s.purchaseReward);

  const [confirmReward, setConfirmReward] = useState(null);
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const child = children[currentChild];
  if (!child) return null;

  const handlePurchase = (rewardId) => {
    const success = purchaseReward(rewardId);
    if (success) {
      setPurchaseSuccess(true);
      setConfirmReward(null);
      setTimeout(() => setPurchaseSuccess(false), 2000);
    }
  };

  const pendingRewards = child.rewardsPurchased.filter(r => !r.fulfilled);
  const fulfilledRewards = child.rewardsPurchased.filter(r => r.fulfilled);

  // Group rewards by category
  const categories = [
    { key: 'treat', label: '🍫 Treats', icon: '🍫' },
    { key: 'screen', label: '📺 Screen Time', icon: '📺' },
    { key: 'toy', label: '🧸 Toys & Fun', icon: '🧸' },
    { key: 'experience', label: '🎡 Experiences', icon: '🎡' },
  ];

  return (
    <div className="page-container">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-left">
          <motion.button
            className="btn btn-ghost btn-small"
            onClick={goHome}
            whileTap={{ scale: 0.95 }}
          >
            ← Back
          </motion.button>
          <span style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'var(--text-xl)',
            fontWeight: 700,
          }}>
            🎁 Reward Shop
          </span>
        </div>
        <div className="top-bar-right">
          <span className="stat-badge gems" style={{ fontSize: 'var(--text-lg)' }}>
            <span className="icon">💎</span> {child.gems}
          </span>
        </div>
      </div>

      <div className="page-content" style={{ maxWidth: '700px' }}>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Gem Balance */}
          <motion.div
            variants={item}
            style={{
              textAlign: 'center',
              margin: '20px 0 32px',
            }}
          >
            <motion.span
              style={{ fontSize: '3rem', display: 'block', marginBottom: '4px' }}
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💎
            </motion.span>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-4xl)',
              fontWeight: 700,
              color: 'var(--gem-blue)',
            }}>
              {child.gems}
            </span>
            <p style={{ color: 'var(--text-muted)', fontSize: 'var(--text-sm)' }}>
              Gems available to spend
            </p>
          </motion.div>

          {/* Purchase Success */}
          <AnimatePresence>
            {purchaseSuccess && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="feedback-correct"
                style={{ marginBottom: '20px' }}
              >
                <span className="emoji">🎉</span>
                <span className="message">Reward Purchased!</span>
                <p style={{ color: 'var(--text-secondary)', fontSize: 'var(--text-sm)', marginTop: '4px' }}>
                  Ask your parent to approve it!
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reward Categories */}
          {categories.map((cat) => {
            const catRewards = rewards.filter(r => r.category === cat.key);
            if (catRewards.length === 0) return null;

            return (
              <motion.div key={cat.key} variants={item} style={{ marginBottom: '28px' }}>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'var(--text-lg)',
                  fontWeight: 600,
                  marginBottom: '12px',
                  color: 'var(--text-secondary)',
                }}>
                  {cat.label}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {catRewards.map((reward) => {
                    const canAfford = child.gems >= reward.cost;
                    return (
                      <motion.div
                        key={reward.id}
                        className="reward-item"
                        whileHover={canAfford ? { scale: 1.01, x: 4 } : {}}
                      >
                        <span className="reward-icon">{reward.icon}</span>
                        <div style={{ flex: 1 }}>
                          <span className="reward-name">{reward.name}</span>
                          <p style={{
                            fontSize: 'var(--text-xs)',
                            color: 'var(--text-muted)',
                            marginTop: '2px',
                          }}>
                            {reward.nameHindi}
                          </p>
                        </div>
                        <span className="reward-cost" style={{
                          color: canAfford ? 'var(--gem-blue)' : 'var(--text-muted)',
                        }}>
                          💎 {reward.cost}
                        </span>
                        <motion.button
                          className={`btn btn-small ${canAfford ? 'btn-primary' : 'btn-ghost'}`}
                          onClick={() => canAfford && setConfirmReward(reward)}
                          disabled={!canAfford}
                          whileTap={canAfford ? { scale: 0.95 } : {}}
                          style={{
                            opacity: canAfford ? 1 : 0.4,
                            minWidth: '70px',
                          }}
                        >
                          {canAfford ? 'Buy' : '🔒'}
                        </motion.button>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}

          {/* Pending Rewards */}
          {pendingRewards.length > 0 && (
            <motion.div variants={item} style={{ marginBottom: '28px' }}>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-lg)',
                fontWeight: 600,
                marginBottom: '12px',
                color: 'var(--accent-yellow)',
              }}>
                ⏳ Waiting for Approval
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {pendingRewards.map((pr, i) => {
                  const reward = rewards.find(r => r.id === pr.rewardId);
                  if (!reward) return null;
                  return (
                    <div key={i} className="glass-card" style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <span style={{ fontSize: '1.5rem' }}>{reward.icon}</span>
                      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, flex: 1 }}>
                        {reward.name}
                      </span>
                      <span style={{
                        fontSize: 'var(--text-sm)',
                        color: 'var(--accent-yellow)',
                        fontWeight: 600,
                      }}>
                        ⏳ Pending
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* Tip */}
          <motion.div
            variants={item}
            className="glass-card"
            style={{ padding: '16px', textAlign: 'center', marginBottom: '40px' }}
          >
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              💡 Earn more gems by completing practice sessions, maintaining streaks, and earning badges!
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Confirm Modal */}
      <AnimatePresence>
        {confirmReward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0,0,0,0.7)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 300,
              padding: '20px',
            }}
            onClick={() => setConfirmReward(null)}
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 20 }}
              className="glass-card-strong"
              style={{
                padding: '32px',
                maxWidth: '380px',
                width: '100%',
                textAlign: 'center',
              }}
              onClick={e => e.stopPropagation()}
            >
              <span style={{ fontSize: '3rem', display: 'block', marginBottom: '12px' }}>
                {confirmReward.icon}
              </span>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'var(--text-xl)',
                fontWeight: 700,
                marginBottom: '8px',
              }}>
                Buy {confirmReward.name}?
              </h3>
              <p style={{
                color: 'var(--text-secondary)',
                marginBottom: '24px',
              }}>
                Spend <strong style={{ color: 'var(--gem-blue)' }}>💎 {confirmReward.cost}</strong> gems?
              </p>
              <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
                <motion.button
                  className="btn btn-primary"
                  onClick={() => handlePurchase(confirmReward.id)}
                  whileTap={{ scale: 0.95 }}
                >
                  ✅ Yes, Buy!
                </motion.button>
                <motion.button
                  className="btn btn-ghost"
                  onClick={() => setConfirmReward(null)}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
