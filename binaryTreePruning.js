var pruneTree = function(root) {
  if (!root) {
    return null;
  }

  root.left = pruneTree(root.left);
  root.right = pruneTree(root.right);

  if (root.val === 1 || root.left || root.right) {
    return root;
  }

    if (root.val === 0 && (root.left === null && root.right === null)) {
    return null;
  }

  if (root.val === 1 && (root.left === null && root.right === null)) {
    return root;
  }
  return null;
};