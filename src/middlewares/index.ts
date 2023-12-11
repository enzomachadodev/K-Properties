import handleError from "./handleError.middleware";
import verifyUserEmailMiddleware from "./verifyUserEmail.middleware";
import verifyAuthMiddleware from "./verifyAuth.middleware";
import verifyBodyMiddleware from "./verifyBody.middleware";
import verifyAdminMiddleware from "./verifyAdmin.middleware";
import verifyUserExistsMiddleware from "./verifyUserExists.middleware";
import verifyUserIsActiveMiddleware from "./verifyUserIsActive.middleware";
import verifyOwnerMiddleware from "./verifyOwner.middleware";
import verifyCategoryNameMiddleware from "./verifyCategoryName.middleware";
import verifyCategoryIdMiddleware from "./verifyCategoryId.middleware";
import verifyAddressMiddleware from "./verifyAddress.middleware";
export {
  handleError,
  verifyUserEmailMiddleware,
  verifyAuthMiddleware,
  verifyBodyMiddleware,
  verifyAdminMiddleware,
  verifyUserIsActiveMiddleware,
  verifyUserExistsMiddleware,
  verifyOwnerMiddleware,
  verifyCategoryNameMiddleware,
  verifyCategoryIdMiddleware,
  verifyAddressMiddleware,
};
